"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Failed to send message. Please check the errors.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  // Require env vars — fail clearly if not configured
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error("GMAIL_USER or GMAIL_APP_PASSWORD environment variable is not set.");
    return {
      message: "Email service is not configured. Please contact me directly at shinukrathod0143@gmail.com",
      status: "error",
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Email to YOU — notification that someone contacted you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
          <div style="background: #3B82F6; padding: 24px 32px;">
            <h2 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0;">From your portfolio website</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; width: 80px;">Name</td>
                <td style="padding: 8px 0; color: #111; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3B82F6;">${email}</a></td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 6px; border: 1px solid #e0e0e0;">
              <p style="color: #666; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="color: #111; margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            <p style="margin-top: 24px; color: #888; font-size: 12px;">Hit Reply to respond directly to ${name}.</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Shinu Rathod" <${gmailUser}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
          <div style="background: #3B82F6; padding: 24px 32px;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Thanks for getting in touch!</h2>
          </div>
          <div style="padding: 32px;">
            <p style="color: #111; margin: 0 0 16px;">Hi ${name},</p>
            <p style="color: #444; line-height: 1.6; margin: 0 0 16px;">
              Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible — usually within 24 hours.
            </p>
            <p style="color: #444; line-height: 1.6; margin: 0 0 24px;">
              In the meantime, feel free to explore my work on
              <a href="https://github.com/SHINU4RATHOD" style="color: #3B82F6;">GitHub</a> or connect on
              <a href="https://www.linkedin.com/in/shinurathod-data-scientist" style="color: #3B82F6;">LinkedIn</a>.
            </p>
            <p style="color: #111; margin: 0;">Best regards,<br/><strong>Shinu Rathod</strong><br/>
            <span style="color: #666; font-size: 13px;">AI Researcher · IIT Ropar | Data Scientist</span></p>
          </div>
          <div style="padding: 16px 32px; background: #f0f0f0; text-align: center;">
            <p style="color: #999; font-size: 11px; margin: 0;">This is an automated reply. Please do not reply to this email directly.</p>
          </div>
        </div>
      `,
    });

    return {
      message: "Thank you for your message! I'll get back to you soon.",
      status: "success",
    };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      message: "Failed to send your message. Please try emailing me directly at shinukrathod0143@gmail.com",
      status: "error",
    };
  }
}
