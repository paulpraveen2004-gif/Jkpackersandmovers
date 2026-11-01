import { NextResponse } from "next/server";

// This API route is a placeholder for future backend integration.
// Currently the form uses WhatsApp fallback which needs no backend.
//
// To integrate email delivery:
//  1. Add a mail provider (e.g. Resend, SendGrid, Nodemailer)
//  2. Set MAIL_API_KEY and MAIL_TO in .env.local
//  3. Replace this handler body with actual mail-send logic
//
// IMPORTANT: Never log or expose customer data publicly.
// Rate-limit this endpoint before deploying to production.

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields server-side
    const required = ["name", "mobile", "date", "pickup", "drop", "items"];
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === "") {
        return NextResponse.json(
          { success: false, message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Mobile validation
    if (!/^[6-9]\d{9}$/.test(String(body.mobile))) {
      return NextResponse.json(
        { success: false, message: "Invalid mobile number." },
        { status: 400 }
      );
    }

    // ── Plug in your mail/CRM integration here ──────────────────
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ from: '...', to: '...', subject: '...', text: '...' });

    // Currently: acknowledge and instruct UI to use WhatsApp fallback
    return NextResponse.json({
      success: true,
      message: "Details received. Please use WhatsApp to send your enquiry and item video.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error. Please contact us directly." },
      { status: 500 }
    );
  }
}

