import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './.temp/oscarfriascom_OLD/content/posts',
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    description: z.string().default('From the writing archive of Oscar Frias.'),
    draft: z.boolean().default(true),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './.temp/oscarfriascom_OLD/content/portfolio',
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = { writing, projects };