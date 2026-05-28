import { defineType, defineField } from 'sanity';

export const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({ name: 'code', type: 'string' }),
    defineField({
      name: 'audience',
      type: 'string',
      options: {
        list: [
          { title: 'Police', value: 'police' },
          { title: 'Counsel', value: 'counsel' },
          { title: 'Corporate', value: 'corporate' },
        ],
      },
    }),
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'sub', type: 'string' }),
    defineField({ name: 'duration', type: 'string' }),
    defineField({ name: 'format', type: 'string' }),
    defineField({ name: 'price', type: 'string' }),
  ],
});
