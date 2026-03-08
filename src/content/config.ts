import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.string(),
    readingTime: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
