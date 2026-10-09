import EventCard from "../components/EventCards";
import { events } from "../constants/dataEvent";

const Page3 = () => {
  return (
    <section className="min-h-screen bg-[#000000] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold tracking-tight text-[#E8DFEE]">
            Discover Events
          </h1>
        </div>

        {/* Search Bar and Filters */}
        <div className=" mb-6 flex flex-col gap-3 md:flex-row border-1 border-none rounded:lg px-4 py-2">
          <input
            type="text"
            placeholder="Search events, artists, or venues..."
            className="min-w-0 flex-1 rounded-lg border border-gray-700 bg-[#211E2D] px-4 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-[#7C3AED]"
          />

          <select className="rounded-full border border-gray-700 bg-[#211E2D] px-4 py-3 text-sm text-gray-300">
            <option>All Categories</option>
            <option>Music</option>
            <option>Technology</option>
            <option>Art</option>
          </select>

          <select className="rounded-full border border-gray-700 bg-[#211E2D] px-4 py-3 text-sm text-gray-300">
            <option>Any Date</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>

          <select className="rounded-full border:none bg-[#211E2D] px-4 py-3 text-sm text-[#A476FF]">
            <option>Any Price</option>
            <option>Free</option>
            <option>Paid</option>
          </select>
        </div>

        {/* Category Tags */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button className="rounded-full bg-[#7C3AED] px-4 py-2 text-xs">
            All Events
          </button>

          <button className="rounded-full border border-gray-700 px-4 py-2 text-xs hover:border-[#7C3AED]">
            Music
          </button>

          <button className="rounded-full border border-gray-700 px-4 py-2 text-xs hover:border-[#7C3AED]">
            Technology
          </button>

          <button className="rounded-full border border-gray-700 px-4 py-2 text-xs hover:border-[#7C3AED]">
            Art & Culture
          </button>
        </div>

        {/* Events Heading */}
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Upcoming Events
          </h2>

          <select className="rounded-md bg-[#211E2D] px-3 py-2 text-xs text-gray-300">
            <option>Popular</option>
            <option>Newest</option>
          </select>
        </div>

        {/* Three Event Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event.id}
              image={event.image}
              category={event.category}
              title={event.title}
              date={event.date}
              location={event.location}
              price={event.price}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-10 flex justify-center">
          <button className="rounded-full border border-gray-700 px-6 py-3 text-sm text-gray-300 transition hover:border-[#7C3AED] hover:bg-[#7C3AED]">
            Load More Events ↓
          </button>
        </div>

      </div>
    </section>
  );
};

export default Page3;
