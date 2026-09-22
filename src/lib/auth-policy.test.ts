import assert from "node:assert/strict";
import test from "node:test";
import {
  DEFAULT_ALLOWED_GOOGLE_DOMAIN,
  getAllowedGoogleDomain,
  isAllowedGoogleEmail,
  isAllowedGoogleProfile,
  normalizeEmail,
} from "./auth-policy";

test("normalizes email", () => {
  assert.equal(
    normalizeEmail("  TEAM@NeighborsPestSolutions.com "),
    "team@neighborspestsolutions.com",
  );
});

test("uses the Neighbors domain even when the former single-email setting remains", () => {
  const priorDomain = process.env.ALLOWED_GOOGLE_DOMAIN;
  const priorEmail = process.env.ALLOWED_GOOGLE_EMAIL;
  try {
    delete process.env.ALLOWED_GOOGLE_DOMAIN;
    process.env.ALLOWED_GOOGLE_EMAIL = "team@neighborspestsolutions.com";
    assert.equal(getAllowedGoogleDomain(), DEFAULT_ALLOWED_GOOGLE_DOMAIN);
    assert.equal(isAllowedGoogleEmail("sales@neighborspestsolutions.com"), true);
    process.env.ALLOWED_GOOGLE_DOMAIN = "@neighborspestsolutions.com";
    assert.equal(getAllowedGoogleDomain(), DEFAULT_ALLOWED_GOOGLE_DOMAIN);
  } finally {
    if (priorDomain === undefined) delete process.env.ALLOWED_GOOGLE_DOMAIN;
    else process.env.ALLOWED_GOOGLE_DOMAIN = priorDomain;
    if (priorEmail === undefined) delete process.env.ALLOWED_GOOGLE_EMAIL;
    else process.env.ALLOWED_GOOGLE_EMAIL = priorEmail;
  }
});

test("accepts verified Google accounts throughout the exact Neighbors domain", () => {
  assert.equal(
    isAllowedGoogleProfile({
      email: "TEAM@neighborspestsolutions.com",
      email_verified: true,
    }),
    true,
  );
  assert.equal(
    isAllowedGoogleProfile({
      email: "  sales@NeighborsPestSolutions.com ",
      email_verified: true,
    }),
    true,
  );
  assert.equal(isAllowedGoogleEmail("ops@neighborspestsolutions.com"), true);
});

test("rejects unverified accounts and lookalike domains", () => {
  assert.equal(
    isAllowedGoogleProfile({
      email: "team@neighborspestsolutions.com",
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
  assert.equal(isAllowedGoogleEmail("someone@neighborspestsolutions.com.evil.com"), false);
  assert.equal(isAllowedGoogleEmail("someone@sub.neighborspestsolutions.com"), false);
  assert.equal(isAllowedGoogleEmail("@neighborspestsolutions.com"), false);
  assert.equal(isAllowedGoogleEmail("someone@@neighborspestsolutions.com"), false);
});
