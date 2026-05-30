import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { service } from './schemas/service';
import { sector } from './schemas/sector';
import { caseFile } from './schemas/caseFile';
import { course } from './schemas/course';
import { article } from './schemas/article';
import { whitepaper } from './schemas/whitepaper';
import { blog } from './schemas/blog';
import { testimonial } from './schemas/testimonial';
import { teamMember } from './schemas/teamMember';
import { page } from './schemas/page';
import { siteSettings } from './schemas/siteSettings';

export default defineConfig({
  name: 'cyber-eye-intelligence',
  title: 'Cyber Eye Intelligence',
  projectId: 'f36piw8r',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [service, sector, caseFile, course, article, whitepaper, blog, testimonial, teamMember, page, siteSettings],
  },
});
