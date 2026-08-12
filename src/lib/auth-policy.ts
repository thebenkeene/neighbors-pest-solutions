export const DEFAULT_ALLOWED_GOOGLE_EMAIL = "team@neighborspestsolutions.com";

export function normalizeEmail(value: string | null | undefined): string {
  return value?.trim().toLowerCase() ?? "";
}

export function getAllowedGoogleEmail(): string {
  return normalizeEmail(
    process.env.ALLOWED_GOOGLE_EMAIL ?? DEFAULT_ALLOWED_GOOGLE_EMAIL,
  );
}

export function isAllowedGoogleProfile(profile: {
  email?: string | null;
  email_verified?: boolean | null;
}): boolean {
  return (
    profile.email_verified === true &&
    normalizeEmail(profile.email) === getAllowedGoogleEmail()
  );
}
