import { defineType, defineField } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'tagline', type: 'string' }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'icon', type: 'string' }),
    defineField({
      name: 'services',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'text' }),
        ],
      }],
    }),
    defineField({ name: 'seoTitle', type: 'string' }),
    defineField({ name: 'seoDescription', type: 'text' }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
  ],
});
