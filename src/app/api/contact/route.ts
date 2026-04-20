import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, service, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Krecim.rs <onboarding@resend.dev>",
      to: "petarginic@gmail.com",
      subject: `Novi upit — ${name}${service ? ` (${service})` : ""}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#7c3aed;margin-bottom:24px;">Novi upit sa krecim.rs</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#6b7280;width:140px;">Ime</td><td style="padding:8px 0;font-weight:600;color:#111827;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;">Telefon</td><td style="padding:8px 0;font-weight:600;color:#111827;">${phone}</td></tr>
            ${email ? `<tr><td style="padding:8px 0;color:#6b7280;">Email</td><td style="padding:8px 0;font-weight:600;color:#111827;">${email}</td></tr>` : ""}
            ${service ? `<tr><td style="padding:8px 0;color:#6b7280;">Usluga</td><td style="padding:8px 0;font-weight:600;color:#111827;">${service}</td></tr>` : ""}
          </table>
          ${message ? `
          <div style="margin-top:20px;padding:16px;background:#f9fafb;border-radius:12px;">
            <p style="color:#6b7280;margin:0 0 8px 0;font-size:13px;">Poruka</p>
            <p style="color:#111827;margin:0;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>` : ""}
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
