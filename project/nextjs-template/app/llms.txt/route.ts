// /llms.txt (spec P1.6): a short Markdown summary for AI crawlers and assistants.
// Built from the same typed source as the pages, so the wording stays in sync.
import { SITE_URL, FIRM_DESCRIPTION, AI_THREATS, OFFICES, PHONE_DISPLAY, DF09 } from '@/lib/ai-positioning';

export const dynamic = 'force-static';

export function GET() {
  const body = [
    '# Cyber Eye Intelligence',
    '',
    `> ${FIRM_DESCRIPTION}`,
    '',
    '## AI threats we investigate',
    '',
    ...AI_THREATS.map((t) => `- ${t.code} ${t.title}: ${t.summary}`),
    '',
    '## Contact',
    '',
    `- Offices: ${OFFICES.join(', ')} (India)`,
    `- 24/7 incident line: ${PHONE_DISPLAY}`,
    '',
    '## Key pages',
    '',
    `- [Home](${SITE_URL}/)`,
    `- [${DF09.code} ${DF09.title}](${SITE_URL}${DF09.path}): ${DF09.cardLine}`,
    `- [Services](${SITE_URL}/services)`,
    `- [Cyber Eye Academy training](${SITE_URL}/training)`,
    `- [Knowledge Centre](${SITE_URL}/knowledge)`,
    `- [Contact](${SITE_URL}/contact)`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
