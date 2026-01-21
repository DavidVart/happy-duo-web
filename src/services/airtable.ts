/**
 * Airtable service for managing waitlist signups
 */

const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = "Waitlist";

interface AirtableRecord {
  id: string;
  fields: Record<string, unknown>;
  createdTime: string;
}

interface AirtableResponse {
  records: AirtableRecord[];
}

interface AirtableError {
  error?: {
    type: string;
    message: string;
  };
}

/**
 * Add a phone number to the waitlist
 * @param phoneNumber - The phone number to add (stored in Email field as per requirements)
 * @returns The created record or throws an error
 */
export async function addToWaitlist(phoneNumber: string): Promise<AirtableRecord> {
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(TABLE_NAME)}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${AIRTABLE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Email: phoneNumber,
            Status: "Pending",
            "Signup Source": "Website",
          },
        },
      ],
    }),
  });

  const data: AirtableResponse & AirtableError = await response.json();

  if (!response.ok) {
    const errorMessage = data.error?.message || "Failed to add to waitlist";
    throw new Error(errorMessage);
  }

  return data.records[0];
}
