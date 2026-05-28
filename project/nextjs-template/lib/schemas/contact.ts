import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  organisation: z.string().optional(),
  matter: z.enum([
    'digital-forensics',
    'digital-intelligence',
    'managed-security',
    'managed-forensics',
    'data-recovery',
    'training',
    'other',
  ]),
  narrative: z.string().min(20, 'Please provide at least 20 characters').max(2000),
  urgency: z.enum(['standard', 'urgent', 'emergency']),
});

export type ContactInput = z.infer<typeof contactSchema>;
