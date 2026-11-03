import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import EventCard from "../components/EventCards";
import { fetchCategories } from "../services/categories";
import { fetchEvents } from "../services/events";

function parseEventDate(date) {
  if (!date) return null;
  const parsed = new Date(String(date).replace(" • ", " "));
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

const Page3 = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const query = searchParams.get("q") ?? "";
  const location = searchParams.get("location") ?? "";
  const selectedCategory = searchParams.get("category") ?? "";
  const selectedDate = searchParams.get("date") ?? "";
  const price = searchParams.get("price") ?? "all";
  const sort = searchParams.get("sort") ?? "popular";
  const timeRange = searchParams.get("when") ?? "";

  useEffect(() => {
    let active = true;
    Promise.all([fetchEvents(), fetchCategories()])
      .then(([eventRows, categoryRows]) => {
        if (!active) return;
        setEvents(eventRows);
        setCategories(categoryRows);
      })
      .catch((loadError) => {
        if (active) setError(loadError.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  function updateFilter(key, value) {
    const next = new URLSearchParams(searchParams);
    if (!value || value === "all") next.delete(key);
    else next.set(key, value);
    setSearchParams(next);
  }

  const filteredEvents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const normalizedLocation = location.trim().toLowerCase();
    const selectedCategoryName = categories.find((category) => category.slug === selectedCategory)?.name;
    const selectedDay = selectedDate ? new Date(`${selectedDate}T00:00:00`) : null;
    const now = new Date();
    const daysUntilSaturday = (6 - now.getDay() + 7) % 7;
    const weekendStart = new Date(now);
    weekendStart.setDate(now.getDate() + daysUntilSaturday);
    weekendStart.setHours(0, 0, 0, 0);
    const weekendEnd = new Date(weekendStart);
    weekendEnd.setDate(weekendStart.getDate() + 2);

    const results = events.filter((event) => {
      const searchableText = [event.title, event.category, event.description, ...(event.tags ?? [])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (normalizedQuery && !searchableText.includes(normalizedQuery)) return false;
      if (normalizedLocation && !String(event.location ?? "").toLowerCase().includes(normalizedLocation)) return false;
      if (selectedCategoryName && event.category !== selectedCategoryName) return false;
      if (price === "free" && String(event.price).toLowerCase() !== "free") return false;
      if (price === "paid" && String(event.price).toLowerCase() === "free") return false;
      if (selectedDay) {
        const eventDate = parseEventDate(event.date);
        if (!eventDate || eventDate.toDateString() !== selectedDay.toDateString()) return false;
      }
      if (timeRange === "weekend") {
        const eventDate = parseEventDate(event.date);
        if (!eventDate || eventDate < weekendStart || eventDate >= weekendEnd) return false;
      }
      return true;
    });

    return results.sort((first, second) => {
      if (sort === "newest") {
        return (parseEventDate(second.date)?.getTime() ?? 0) - (parseEventDate(first.date)?.getTime() ?? 0);
      }
      return (second.attendees ?? 0) - (first.attendees ?? 0);
    });
  }, [categories, events, location, price, query, selectedCategory, selectedDate, sort, timeRange]);

  return (
    <main className="min-h-[65vh] bg-black px-4 py-8 text-white sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-7 sm:mb-9">
          <p className="text-sm font-semibold uppercase text-violet-300">Evently listings</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-5xl">Discover events</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Search experiences, narrow the list, and open any event for its full details.
          </p>
        </header>

        <section aria-label="Event filters" className="mb-7 grid gap-3 rounded-lg border border-gray-800 bg-[#15131B] p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-5">
          <label className="sm:col-span-2 lg:col-span-1">
            <span className="sr-only">Search events</span>
            <input
              type="search"
              value={query}
              onChange={(event) => updateFilter("q", event.target.value)}
              placeholder="Search events or artists"
              className="min-h-11 w-full rounded-md border border-gray-700 bg-[#211E2D] px-3 text-sm outline-none placeholder:text-gray-500 focus:border-violet-500"
            />
          </label>
          <label>
            <span className="sr-only">Filter by location</span>
            <input
              type="search"
              value={location}
              onChange={(event) => updateFilter("location", event.target.value)}
              placeholder="Location"
              className="min-h-11 w-full rounded-md border border-gray-700 bg-[#211E2D] px-3 text-sm outline-none placeholder:text-gray-500 focus:border-violet-500"
            />
          </label>
          <label>
            <span className="sr-only">Filter by category</span>
            <select
              value={selectedCategory}
              onChange={(event) => updateFilter("category", event.target.value)}
              className="min-h-11 w-full rounded-md border border-gray-700 bg-[#211E2D] px-3 text-sm text-gray-200"
            >
              <option value="">All categories</option>
              {categories.map((category) => <option key={category.id} value={category.slug}>{category.name}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">Filter by date</span>
            <input
              type="date"
              value={selectedDate}
              onChange={(event) => updateFilter("date", event.target.value)}
              className="min-h-11 w-full rounded-md border border-gray-700 bg-[#211E2D] px-3 text-sm text-gray-200"
            />
          </label>
          <label>
            <span className="sr-only">Filter by price</span>
            <select
              value={price}
              onChange={(event) => updateFilter("price", event.target.value)}
              className="min-h-11 w-full rounded-md border border-gray-700 bg-[#211E2D] px-3 text-sm text-gray-200"
            >
              <option value="all">Any price</option>
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
          </label>
        </section>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold">{loading ? "Loading events" : `${filteredEvents.length} events`}</h2>
          <label className="flex items-center gap-2 text-sm text-gray-400">
            Sort
            <select
              value={sort}
              onChange={(event) => updateFilter("sort", event.target.value)}
              className="min-h-10 rounded-md border border-gray-700 bg-[#211E2D] px-3 text-sm text-gray-200"
            >
              <option value="popular">Most popular</option>
              <option value="newest">Date</option>
            </select>
          </label>
        </div>

        {loading ? (
          <p role="status" className="py-12 text-center text-gray-400">Loading events...</p>
        ) : error ? (
          <p role="alert" className="rounded-md border border-red-900 bg-red-950/40 p-4 text-red-200">Could not load events: {error}</p>
        ) : filteredEvents.length === 0 ? (
          <div className="rounded-lg border border-gray-800 px-5 py-12 text-center">
            <h2 className="text-lg font-semibold">No matching events</h2>
            <p className="mt-2 text-sm text-gray-400">Try changing or clearing your filters.</p>
            <button type="button" onClick={() => setSearchParams({})} className="mt-5 text-sm font-semibold text-violet-300 hover:text-violet-200">Clear filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => <EventCard key={event.id} {...event} />)}
          </div>
        )}
      </div>
    </main>
  );
};

export default Page3;
