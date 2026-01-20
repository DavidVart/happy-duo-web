/**
 * Airtable Waitlist Integration
 * 
 * NOTE: For production, move API calls to a serverless function (Vercel/Netlify)
 * to avoid exposing your Airtable API token in the client bundle.
 */

const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = 'Waitlist';

export interface WaitlistEntry {
  name?: string;
  email: string;
  signupSource: 'Website' | 'Referral' | 'Social Media' | 'Event';
  notes?: string;
  referredBy?: string;
}

interface AirtableRecord {
  fields: {
    Name?: string;
    Email: string;
    Status: 'Pending' | 'Confirmed';
    'Priority Level': 'Low' | 'Medium' | 'High';
    'Signup Source': string;
    Notes?: string;
  };
}

export async function addToWaitlist(entry: WaitlistEntry): Promise<{ success: boolean; error?: string; position?: number }> {
  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
    console.error('Airtable credentials not configured');
    return { success: false, error: 'Service temporarily unavailable' };
  }

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(TABLE_NAME)}`;

  // Determine priority based on referral
  const priority: 'Low' | 'Medium' | 'High' = entry.signupSource === 'Referral' ? 'Medium' : 'Low';

  // Build notes with referral info
  let notes = entry.notes || '';
  if (entry.referredBy) {
    notes = `Referred by: ${entry.referredBy}${notes ? `. ${notes}` : ''}`;
  }

  const record: AirtableRecord = {
    fields: {
      Name: entry.name || '',
      Email: entry.email,
      Status: 'Pending',
      'Priority Level': priority,
      'Signup Source': entry.signupSource,
      Notes: notes || undefined,
    },
  };

  try {
    // First, check if email already exists
    const checkUrl = `${url}?filterByFormula=${encodeURIComponent(`{Email}='${entry.email}'`)}`;
    const checkResponse = await fetch(checkUrl, {
      headers: {
        'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
      },
    });

    if (!checkResponse.ok) {
      throw new Error('Failed to check existing entries');
    }

    const checkData = await checkResponse.json();
    if (checkData.records && checkData.records.length > 0) {
      return { success: false, error: 'This email is already on the waitlist!' };
    }

    // Add new record
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(record),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable error:', errorData);
      throw new Error(errorData.error?.message || 'Failed to join waitlist');
    }

    // Get approximate position (count of records)
    const countUrl = `${url}?fields%5B%5D=Email`;
    const countResponse = await fetch(countUrl, {
      headers: {
        'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
      },
    });
    
    let position = 0;
    if (countResponse.ok) {
      const countData = await countResponse.json();
      position = countData.records?.length || 0;
    }

    return { success: true, position };
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Something went wrong. Please try again.' 
    };
  }
}

/**
 * Generate a referral link for a user
 */
export function generateReferralLink(email: string): string {
  const baseUrl = window.location.origin;
  const referralCode = btoa(email).replace(/[=+/]/g, '').slice(0, 8);
  return `${baseUrl}?ref=${referralCode}`;
}

/**
 * Get referral code from URL
 */
export function getReferralFromUrl(): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get('ref');
}
