import { defineType, defineField } from 'sanity';

export const whitepaper = defineType({
  name: 'whitepaper',
  title: 'Whitepaper',
  type: 'document',
  fields: [
    defineField({ name: 'code', type: 'string' }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'sub', type: 'string' }),
    defineField({ name: 'year', type: 'string' }),
    defineField({ name: 'pdfUrl', type: 'string' }),
  ],
});
