/**
 * Generate a unique referral code from a phone number
 * @param phoneNumber - The user's phone number (e.g., "+1 555 123 4567")
 * @returns A short unique referral code (e.g., "a7k9x2")
 */
export function generateReferralCode(phoneNumber: string): string {
    // Remove all non-numeric characters
    const cleaned = phoneNumber.replace(/\D/g, "");

    // Simple hash function
    let hash = 0;
    for (let i = 0; i < cleaned.length; i++) {
        const char = cleaned.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
    }

    // Convert to positive number and then to base-36 (0-9, a-z)
    const code = Math.abs(hash).toString(36);

    // Take first 6 characters for a short, memorable code
    return code.substring(0, 6).toLowerCase();
}

/**
 * Generate a full referral link for a phone number
 * @param phoneNumber - The user's phone number
 * @returns Full referral URL
 */
export function generateReferralLink(phoneNumber: string): string {
    const code = generateReferralCode(phoneNumber);
    return `https://www.happyduo.app/?ref=${code}`;
}
