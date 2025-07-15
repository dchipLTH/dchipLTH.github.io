import { getCollection } from "astro:content";

// Get volunteers
export async function getSortedVolunteers(lang) {
  return (await getCollection("volunteers"))
    .filter((post) => post.slug.startsWith(lang))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
