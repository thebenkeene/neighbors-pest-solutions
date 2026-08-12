import assert from "node:assert/strict";
import test from "node:test";
import {
  DEFAULT_ALLOWED_GOOGLE_EMAIL,
  isAllowedGoogleProfile,
  normalizeEmail,
} from "./auth-policy";

test("normalizes email before exact comparison", () => {
  assert.equal(
    normalizeEmail("  TEAM@NeighborsPestSolutions.com "),
    DEFAULT_ALLOWED_GOOGLE_EMAIL,
  );
});

test("accepts only the verified allowlisted Google email", () => {
  assert.equal(
    isAllowedGoogleProfile({
      email: "TEAM@neighborspestsolutions.com",
      email_verified: true,
    }),
    true,
  );
  assert.equal(
    isAllowedGoogleProfile({
      email: DEFAULT_ALLOWED_GOOGLE_EMAIL,
      email_verified: false,
    }),
    false,
  );
  assert.equal(
    isAllowedGoogleProfile({
      email: "someone@example.com",
      email_verified: true,
    }),
    false,
  );
});
