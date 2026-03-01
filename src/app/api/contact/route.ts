import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, serviceType, pestType, address, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !pestType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log the submission, replace with your email service (Resend, SendGrid, Nodemailer, etc.)
    console.log("Contact form submission:", {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      serviceType,
      pestType,
      address,
      message,
      submittedAt: new Date().toISOString(),
    });

    // TODO: Integrate email service here
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@neighborspestsolutions.com',
    //   to: 'info@neighborspestsolutions.com',
    //   subject: `New quote request, ${pestType}, ${firstName} ${lastName}`,
    //   html: `<p>Name: ${firstName} ${lastName}</p><p>Email: ${email}</p>...`,
    // });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
