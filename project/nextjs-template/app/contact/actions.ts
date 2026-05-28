'use server';

import { Resend } from 'resend';
import { contactSchema } from '@/lib/schemas/contact';

export async function submitContact(_prev: { success: boolean; error?: string } | null, formData: FormData) {
  if (!process.env.RESEND_API_KEY) {
    return { success: false, error: 'Email service not configured. Please call us directly.' };
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone') ?? undefined,
    organisation: formData.get('organisation') ?? undefined,
    matter: formData.get('matter'),
    narrative: formData.get('narrative'),
    urgency: formData.get('urgency'),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? 'Validation failed';
    return { success: false, error: firstError };
  }

  const { name, email, phone, organisation, matter, narrative, urgency } = parsed.data;

  try {
    // Internal notification
    await resend.emails.send({
      from: 'Cyber Eye Intelligence <noreply@cybereyeintelligence.com>',
      to: 'hello@cybereyeintelligence.com',
      subject: `[${urgency.toUpperCase()}] New matter — ${matter}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : '',
        organisation ? `Organisation: ${organisation}` : '',
        `Matter type: ${matter}`,
        `Urgency: ${urgency}`,
        '',
        'Narrative:',
        narrative,
      ].filter(Boolean).join('\n'),
    });

    // Auto-reply
    await resend.emails.send({
      from: 'Cyber Eye Intelligence <noreply@cybereyeintelligence.com>',
      to: email,
      subject: 'We received your enquiry — Cyber Eye Intelligence',
      text: `Dear ${name},\n\nThank you for reaching out. We have received your enquiry and a senior examiner will contact you within 4 hours during business hours (or via our 24/7 line for urgent matters).\n\nCyber Eye Intelligence\n+91 80 4567 8910\ncybereyeintelligence.com`,
    });

    return { success: true };
  } catch {
    return { success: false, error: 'Failed to send message. Please call us directly.' };
  }
}
