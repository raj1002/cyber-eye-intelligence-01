import { defineType, defineField } from 'sanity';

export const caseFile = defineType({
  name: 'caseFile',
  title: 'Case File',
  type: 'document',
  fields: [
    defineField({ name: 'ref', type: 'string' }),
    defineField({ name: 'sector', type: 'string' }),
    defineField({ name: 'label', type: 'string' }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'sub', type: 'string' }),
    defineField({ name: 'imgLabel', type: 'string' }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
  ],
});
