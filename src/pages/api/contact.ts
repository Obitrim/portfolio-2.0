import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name: string;
  email: string;
  type: string;
  message: string;
};

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, type, message } = req.body as ContactPayload;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res
      .status(400)
      .json({ message: 'Name, email, and message are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST ?? 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO ?? 'paulobitrim@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${type || 'Inquiry'} — ${name}`,
      html: `
        <div style="
          font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
          max-width: 650px;
          margin: 0 auto;
          background: #0a0a0a;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #23272f;
          box-shadow: 0 2px 24px #00001422;
        ">
          <div style="
            background: #191b22;
            padding: 28px 32px 20px 32px;
            border-bottom: 1px solid #23272f;
          ">
            <h2 style="color: #ff882a; margin: 0 0 6px; font-size: 22px; letter-spacing: 1px;">
              New Portfolio Message
            </h2>
            <p style="
              color: #c1c7ce;
              margin: 0 0 2px;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 2.5px;
              font-weight: 600;
              opacity: 0.94;
            ">
              ${type ? type : 'General Inquiry'}
            </p>
          </div>
          <div style="
            background: linear-gradient(92deg, #15171d 80%, #143178 130%);
            padding: 30px 32px 16px 32px;
          ">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="
                  padding: 7px 0;
                  color: #8892b0;
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 1.5px;
                  width: 90px;
                  font-weight: 500;
                  vertical-align: top;
                ">Name</td>
                <td style="
                  padding: 7px 0;
                  color: #f6f8fa;
                  font-size: 16px;
                  font-weight: 700;
                  vertical-align: top;
                ">${name}</td>
              </tr>
              <tr>
                <td style="
                  padding: 7px 0;
                  color: #8892b0;
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 1.5px;
                  font-weight: 500;
                  vertical-align: top;
                ">Email</td>
                <td style="
                  padding: 7px 0;
                  vertical-align: top;
                "><a href="mailto:${email}" style="
                  color: #2997ff;
                  text-decoration: underline;
                  font-size: 15px;
                  font-weight: 600;
                ">${email}</a></td>
              </tr>
              <tr>
                <td style="
                  padding: 7px 0;
                  color: #8892b0;
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 1.5px;
                  font-weight: 500;
                  vertical-align: top;
                ">Type</td>
                <td style="
                  padding: 7px 0;
                  color: #ff882a;
                  font-size: 13px;
                  font-weight: 600;
                  vertical-align: top;
                  letter-spacing: 0.5px;
                ">${type || '—'}</td>
              </tr>
            </table>
          </div>
          <div style="
            background: #16171b;
            padding: 26px 32px 30px 32px;
            border-top: 1px solid #23272f;
          ">
            <div style="
              color: #8892b0;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 1.5px;
              margin-bottom: 11px;
              opacity: 0.92;
            ">
              Message
            </div>
            <div style="
              color: #f1f1f1;
              font-size: 16px;
              line-height: 1.8;
              border-left: 3px solid #384de9;
              padding-left: 16px;
              overflow-wrap: break-word;
              white-space: pre-wrap;
            ">
              ${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
            </div>
          </div>
          <div style="
            background: #0e1012;
            padding: 18px 32px;
            text-align: right;
            border-top: 1px solid #23272f;
          ">
            <p style="
              color: #384860;
              font-size: 12px;
              margin: 0;
              letter-spacing: 0.5px;
              font-weight: 500;
            ">
              Sent via <a href="https://paulobitrim.dev" style="color: #ff882a; text-decoration: none;">paulobitrim.dev</a> portfolio ✦
            </p>
          </div>
        </div>
      `,
    });

    // try {
    //   await appendContactToSheet({ name, email, type, message });
    // } catch {
    //   // sheet write failed silently — email was still sent
    // }

    return res.status(200).json({ message: 'Message sent successfully.' });
  } catch {
    return res
      .status(500)
      .json({ message: 'Failed to send message. Please try again.' });
  }
}
