import { getCollection } from "astro:content";

//Get news
export async function getSortedNews( lang ) {
    return (await getCollection('news'))
    // Filter news to include only those that match the current language (e.g., 'sv' or 'en')
    .filter((post) => post.slug.startsWith(lang))
    //Sort by date, the news added most recently shows first
    .sort((a, b) =>  b.data.date.valueOf() - a.data.date.valueOf());
}