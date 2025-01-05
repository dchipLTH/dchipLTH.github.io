import { getCollection } from "astro:content";

export async function getSortedEvents( lang ) {
    return (await getCollection('events'))
    // Filter events to include only those that match the current language (e.g., 'sv' or 'en')
    .filter((post) => post.slug.startsWith(lang))
    //Sort by date, the event closest in time is first
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
}
