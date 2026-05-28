import { defineType, defineField } from 'sanity';

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({ name: 'type', type: 'string' }),
    defineField({ name: 'readTime', type: 'string' }),
    defineField({ name: 'date', type: 'string' }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'label', type: 'string' }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({ name: 'seoTitle', type: 'string' }),
    defineField({ name: 'seoDescription', type: 'text' }),
  ],
});
