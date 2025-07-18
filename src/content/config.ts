import { defineCollection, z } from "astro:content";

const events = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
    time: z.string(),
    location: z.string(),
    heroImage: z.string().optional(),
    buttonLink: z.string().url().optional(), // Optional button link, must be a valid URL
    buttonText: z.string().optional(), // Optional button text
  }),
});

const news = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
    heroImage: z.string().optional(),
    buttonLink: z.string().url().optional(), // Optional button link, must be a valid URL
    buttonText: z.string().optional(), // Optional button text
    summary: z.string().optional(), // Optional summary field
  }),
});

const volunteers = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    heroImage: z.string().optional(),
    buttonLink: z.string().url().optional(),
    buttonText: z.string().optional(),
  }),
});

// Combine both collections into one export
export const collections = {
  events,
  news,
  volunteers,
};
