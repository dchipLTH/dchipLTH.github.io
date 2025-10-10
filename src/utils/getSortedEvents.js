import { getCollection } from "astro:content";

export async function getSortedEvents(lang) {
  const allEvents = (await getCollection("events"))
    // Filter events to include only those that match the current language (e.g., 'sv' or 'en')
    .filter((post) => post.slug.startsWith(lang));
  //Sort by date, the event closest in time is first - this is done below!
  //.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const today = new Date();

  const comingEvents = allEvents
    .filter((event) => new Date(event.data.date) >= today)
    // filter all past events & sort by most recent event
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());

  const pastEvents = allEvents
    .filter((event) => new Date(event.data.date) < today)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return { comingEvents, pastEvents };
}
