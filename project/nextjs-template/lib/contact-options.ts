// Single source for the contact form's Practice area options (spec P1.5).
// Every `/contact?type=` link on the site must use a `value` from this list.

export interface PracticeOption {
  label: string;
  value: string;
}

export const PRACTICE_OPTIONS = [
  { label: 'AI incident (deepfake, AI-enabled fraud, LLM breach)', value: 'ai-incident' },
  { label: 'Free 30-minute AI risk call', value: 'ai-risk-call' },
  // Existing pills keep their original values (several share a practice family).
  { label: 'Mobile', value: 'digital-forensics' },
  { label: 'Cloud', value: 'managed-security' },
  { label: 'Insider', value: 'managed-forensics' },
  { label: 'Malware', value: 'digital-forensics' },
  { label: 'Email', value: 'digital-intelligence' },
  { label: 'Fraud', value: 'digital-intelligence' },
  { label: 'Disk', value: 'data-recovery' },
  { label: 'Retainer enquiry', value: 'retainer' },
] as const satisfies readonly PracticeOption[];

export type PracticeValue = (typeof PRACTICE_OPTIONS)[number]['value'];

// Values that `?type=` may preselect. Only the new options are addressable by URL,
// because the older pills share values and a value can't identify one pill.
export const URL_TYPES = ['ai-incident', 'ai-risk-call', 'retainer'] as const satisfies readonly PracticeValue[];

// Label of the pill selected when there is no (or an unknown) `?type=`: today's default.
export const DEFAULT_PRACTICE_LABEL = 'Mobile';

/** Returns the label of the pill to preselect. */
export function preselectedLabel(type: string | string[] | undefined): string {
  const v = Array.isArray(type) ? type[0] : type;
  const match = PRACTICE_OPTIONS.find((o) => o.value === v && (URL_TYPES as readonly string[]).includes(o.value));
  return match?.label ?? DEFAULT_PRACTICE_LABEL;
}
