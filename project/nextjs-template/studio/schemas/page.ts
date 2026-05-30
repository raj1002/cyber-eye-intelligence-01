import { defineType, defineField } from 'sanity';

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'description', type: 'text', rows: 2, title: 'Short description (shown under page title)' }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Page content',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Alt text', validation: (r) => r.required() }),
            defineField({ name: 'caption', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'layout',
      type: 'string',
      title: 'Layout width',
      options: { list: ['default', 'wide', 'narrow'], layout: 'radio' },
      initialValue: 'default',
    }),
    defineField({ name: 'seoTitle', type: 'string' }),
    defineField({ name: 'seoDescription', type: 'text', rows: 2 }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
    prepare: (selection: Record<string, string>) => ({
      title: selection.title,
      subtitle: `/${selection.subtitle}`,
    }),
  },
});
