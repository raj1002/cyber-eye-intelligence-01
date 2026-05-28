import { defineType, defineField } from 'sanity';

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'author', type: 'string' }),
    defineField({ name: 'firm', type: 'string' }),
    defineField({
      name: 'rating',
      type: 'number',
      validation: (r) => r.min(1).max(5),
    }),
  ],
});
