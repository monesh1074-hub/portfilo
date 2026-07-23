import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendKey = process.env.RESEND_API_KEY || 're_gRq3DKfQ_Bwd7CvMTPSMyU5TxFkfmfgpH';
const resend = new Resend(resendKey);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Send email using Resend SDK
    const recipientEmail = process.env.OWNER_EMAIL || 'kamaleshmonesh908@gmail.com';

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: email,
      subject: `[Portfolio Inquiry] ${subject || 'New Contact Form Submission'} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #070A10; color: #F8FAFC; border-radius: 12px; border: 1px solid #1E293B;">
          <div style="border-bottom: 2px solid #00F0FF; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #00F0FF; margin: 0; font-size: 20px;">New Portfolio Contact Message</h2>
            <p style="color: #94A3B8; font-size: 12px; margin-top: 4px;">Received via monesh.dev Next.js Contact Form</p>
          </div>

          <div style="margin-bottom: 16px;">
            <p style="margin: 4px 0; color: #CBD5E1;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 4px 0; color: #CBD5E1;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #38BDF8;">${email}</a></p>
            <p style="margin: 4px 0; color: #CBD5E1;"><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
          </div>

          <div style="background-color: #0F172A; padding: 16px; border-radius: 8px; border: 1px solid #334155; margin-top: 20px;">
            <h3 style="color: #A855F7; margin-top: 0; font-size: 14px;">Message Content:</h3>
            <p style="color: #F8FAFC; white-space: pre-wrap; line-height: 1.6; margin: 0;">${message}</p>
          </div>

          <div style="margin-top: 24px; text-align: center; border-top: 1px solid #1E293B; padding-top: 12px; font-size: 11px; color: #64748B;">
            Sent automatically via Resend API • Monesh Developer Portfolio
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error('API Route Error:', err);
    return NextResponse.json(
      { error: err.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
