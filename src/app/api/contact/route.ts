import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const TO_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL ?? "info@neighborspestsolutions.com";

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, serviceType, pestType, address, message } = body;

    if (!firstName || !lastName || !email || !phone || !pestType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
      dateStyle: "full",
      timeStyle: "short",
    });

    const sFirstName   = esc(firstName);
    const sLastName    = esc(lastName);
    const sEmail       = esc(email);
    const sPhone       = esc(phone);
    const sServiceType = esc(serviceType || "Residential");
    const sPestType    = esc(pestType);
    const sAddress     = esc(address || "");
    const sMessage     = esc(message || "");

    const notificationHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; color: #111111; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
  <div style="background: #1e3a8a; padding: 24px 28px; border-radius: 10px 10px 0 0;">
    <p style="color: #93c5fd; margin: 0 0 2px 0; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Neighbors Pest Solutions</p>
    <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700;">New Quote Request</h1>
  </div>
  <div style="background: #ffffff; border: 1px solid #e5e7eb; border-top: 3px solid #3b82f6; border-radius: 0 0 10px 10px; padding: 28px;">
    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
      <tr><td style="padding: 10px 12px; font-weight: 700; width: 150px; color: #1e3a8a; background: #eff6ff;">Name</td><td style="padding: 10px 12px; background: #eff6ff; color: #111111;">${sFirstName} ${sLastName}</td></tr>
      <tr><td style="padding: 10px 12px; font-weight: 700; color: #1e3a8a;">Email</td><td style="padding: 10px 12px;"><a href="mailto:${sEmail}" style="color:#3b82f6; text-decoration: none;">${sEmail}</a></td></tr>
      <tr><td style="padding: 10px 12px; font-weight: 700; color: #1e3a8a; background: #eff6ff;">Phone</td><td style="padding: 10px 12px; background: #eff6ff;"><a href="tel:${sPhone}" style="color:#3b82f6; text-decoration: none;">${sPhone}</a></td></tr>
      <tr><td style="padding: 10px 12px; font-weight: 700; color: #1e3a8a;">Service Type</td><td style="padding: 10px 12px; color: #111111;">${sServiceType}</td></tr>
      <tr><td style="padding: 10px 12px; font-weight: 700; color: #1e3a8a; background: #eff6ff;">Pest Type</td><td style="padding: 10px 12px; background: #eff6ff; color: #111111;"><strong>${sPestType}</strong></td></tr>
      <tr><td style="padding: 10px 12px; font-weight: 700; color: #1e3a8a;">Property Address</td><td style="padding: 10px 12px; color: #111111;">${sAddress || "—"}</td></tr>
      <tr><td style="padding: 10px 12px; font-weight: 700; color: #1e3a8a; background: #eff6ff; vertical-align: top;">Message</td><td style="padding: 10px 12px; background: #eff6ff; color: #111111; white-space: pre-wrap;">${sMessage || "—"}</td></tr>
      <tr><td style="padding: 10px 12px; font-weight: 700; color: #1e3a8a;">Submitted</td><td style="padding: 10px 12px; color: #6b6b6b; font-size: 13px;">${submittedAt}</td></tr>
    </table>
    <div style="margin-top: 24px; padding: 14px 16px; background: #eff6ff; border-left: 4px solid #3b82f6;">
      <p style="margin: 0; font-size: 13px; color: #1e3a8a;">Reply to this email to respond directly to <strong>${sFirstName}</strong>, or click <a href="mailto:${sEmail}" style="color:#3b82f6;">${sEmail}</a>.</p>
    </div>
  </div>
  <p style="font-size: 11px; color: #a0a0a0; margin-top: 16px; text-align: center;">Neighbors Pest Solutions · neighborspestsolutions.com</p>
</body>
</html>`;

    const confirmationHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Arial, sans-serif; color: #111111; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5;">
  <div style="background: #1e3a8a; padding: 24px 28px; border-radius: 10px 10px 0 0;">
    <p style="color: #93c5fd; margin: 0 0 4px 0; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;">Neighbors Pest Solutions</p>
    <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">We got your request, ${sFirstName}!</h1>
  </div>
  <div style="background: #ffffff; border: 1px solid #e5e7eb; border-top: 3px solid #3b82f6; border-radius: 0 0 10px 10px; padding: 28px;">
    <p style="margin: 0 0 16px 0; font-size: 15px; color: #111111;">Thanks for reaching out. We've received your request for <strong style="color:#1e3a8a;">${sPestType}</strong> and will be in touch within 1 business day.</p>
    <p style="margin: 0 0 16px 0; font-size: 14px; color: #404040;">Here's a summary of what you submitted:</p>
    <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
      <tr><td style="padding: 10px 12px; font-weight: 700; width: 150px; color: #1e3a8a; background: #eff6ff;">Service Type</td><td style="padding: 10px 12px; background: #eff6ff; color: #111111;">${sServiceType}</td></tr>
      <tr><td style="padding: 10px 12px; font-weight: 700; color: #1e3a8a;">Pest Type</td><td style="padding: 10px 12px; color: #111111;"><strong>${sPestType}</strong></td></tr>
      ${sAddress ? `<tr><td style="padding: 10px 12px; font-weight: 700; color: #1e3a8a; background: #eff6ff;">Property Address</td><td style="padding: 10px 12px; background: #eff6ff; color: #111111;">${sAddress}</td></tr>` : ""}
      ${sMessage ? `<tr><td style="padding: 10px 12px; font-weight: 700; color: #1e3a8a; vertical-align: top;">Your Message</td><td style="padding: 10px 12px; color: #111111; white-space: pre-wrap;">${sMessage}</td></tr>` : ""}
    </table>
    <div style="background: #1e3a8a; border-radius: 8px; padding: 18px 20px; text-align: center;">
      <p style="margin: 0 0 6px 0; color: #bfdbfe; font-size: 13px;">Need help sooner? Call us directly:</p>
      <a href="tel:+18588782847" style="color: #ffffff; font-size: 20px; font-weight: 700; text-decoration: none;">(858) 878-2847</a>
    </div>
    <p style="margin: 24px 0 0 0; font-size: 14px; color: #404040;">— The Neighbors Pest Solutions Team</p>
  </div>
  <p style="font-size: 11px; color: #a0a0a0; margin-top: 16px; text-align: center;">Neighbors Pest Solutions · neighborspestsolutions.com</p>
</body>
</html>`;

    const [notification, confirmation] = await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        replyTo: email,
        subject: `New Quote Request: ${pestType} — ${firstName} ${lastName}`,
        html: notificationHtml,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "We got your request — Neighbors Pest Solutions",
        html: confirmationHtml,
      }),
    ]);

    if (notification.error || confirmation.error) {
      console.error("Resend errors:", { notification: notification.error, confirmation: confirmation.error });
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
