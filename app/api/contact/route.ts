import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// ── Validation schema ─────────────────────────────────────────────────────
const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  organisation: z.string().max(200).optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(200),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(5000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = ContactSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validated.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { name, email, organisation, subject, message } = validated.data;

    // ── Send email via Resend ────────────────────────────────────────────
    const resendKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL ?? "lab@vu.nl";

    if (resendKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);

      await resend.emails.send({
        from: "CIK Lab Website <noreply@ciklab.vu.nl>",
        to: [contactEmail],
        reply_To: email,
        subject: `[CIK Lab Contact] ${subject}`,
        text: `
New contact form submission

Name: ${name}
Email: ${email}
${organisation ? `Organisation: ${organisation}\n` : ""}
Subject: ${subject}

Message:
${message}
        `.trim(),
      });
    } else {
      // Development: log to console
      console.log("[Contact Form]", { name, email, organisation, subject, message });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact API]", err);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

// Rate limiting note: add upstash/ratelimit in production
export const runtime = "edge";
