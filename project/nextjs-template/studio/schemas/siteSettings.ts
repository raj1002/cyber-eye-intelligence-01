import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeading', type: 'string', title: 'Hero heading' }),
    defineField({ name: 'heroSubheading', type: 'text', rows: 3, title: 'Hero subheading' }),
    defineField({
      name: 'heroStats',
      type: 'array',
      title: 'Hero stats (bottom bar)',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value', type: 'string', title: 'Value (e.g. "600+")' }),
          defineField({ name: 'label', type: 'string', title: 'Label (e.g. "Cases closed")' }),
        ],
        preview: {
          select: { title: 'value', subtitle: 'label' },
        },
      }],
    }),
    defineField({
      name: 'marqueeLogos',
      type: 'array',
      title: 'Trusted by (marquee ticker)',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featuredCaseQuote',
      type: 'text',
      rows: 3,
      title: 'Featured case file quote',
    }),
    defineField({ name: 'featuredCaseAttribution', type: 'string', title: 'Attribution line' }),
    defineField({ name: 'featuredCaseLabel', type: 'string', title: 'Case label (e.g. "Mumbai · Corporate IP Theft")' }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});
