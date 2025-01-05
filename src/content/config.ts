import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  schema: z.object({
    inProgress: z.boolean(), // Indicates if the project is currently in progress
    title: z.string(), // Title of the project
    description: z.string(), // Brief description of the project
    tags: z.array(z.string()), // Array of tags for categorization
    link: z.string().url(), // URL linking to the project
    image: z.object({
      src: z.string(), // Path to the image file
      alt: z.string().optional(), // Optional alt text for the image
    }), // Object to define image properties
  }),
});

export const collections = {
  projects: projectsCollection,
};
