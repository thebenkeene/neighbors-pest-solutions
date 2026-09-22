export const DEFAULT_ALLOWED_GOOGLE_DOMAIN = "neighborspestsolutions.com";

export function normalizeEmail(value: string | null | undefined): string {
  return value?.trim().toLowerCase() ?? "";
}

export function getAllowedGoogleDomain(): string {
  const configuredDomain = process.env.ALLOWED_GOOGLE_DOMAIN?.trim().toLowerCase().replace(/^@/, "");
  return configuredDomain || DEFAULT_ALLOWED_GOOGLE_DOMAIN;
}

export function isAllowedGoogleEmail(value: string | null | undefined): boolean {
  const parts = normalizeEmail(value).split("@");
  return parts.length === 2 && Boolean(parts[0]) && parts[1] === getAllowedGoogleDomain();
}

export function isAllowedGoogleProfile(profile: {
  email?: string | null;
  email_verified?: boolean | null;
}): boolean {
  return (
    profile.email_verified === true &&
    isAllowedGoogleEmail(profile.email)
  );
}
