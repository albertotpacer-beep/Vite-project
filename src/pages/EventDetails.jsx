import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { events } from "../constants/dataEvent";

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((item) => item.id === Number(id));
  const similarEvents = events.filter((item) => item.id !== event?.id).slice(0, 3);

  if (!event) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center text-white">
        <h1 className="text-3xl font-bold">Event not found</h1>
        <p className="mt-3 text-gray-400">This event may have been removed.</p>
        <Link
          to="/events"
          className="mt-6 rounded-md bg-violet-600 px-5 py-3 text-sm font-semibold hover:bg-violet-500"
        >
          Browse events
        </Link>
      </main>
    );
  }

   return (
    <main className="min-h-screen bg-[#100D18] text-white">

      {/* Hero Section */}
      <section className="relative h-[420px] overflow-hidden md:h-[500px]">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#100D18] via-black/40 to-black/10" />

        <div className="absolute bottom-10 left-6 right-6 md:left-12">
          <div className="mb-3 flex gap-2">
            <span className="rounded-full bg-purple-600 px-3 py-1 text-xs">
              {event.category}
            </span>

            <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
              Live Event
            </span>
          </div>

          <h1 className="text-3xl font-extrabold md:text-5xl">
            {event.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-5 text-sm text-gray-300">
            <p>📅 {event.date}</p>
            <p>📍 {event.location}</p>
          </div>
        </div>
      </section>

      {/* Event Information */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-8 md:px-12 lg:grid-cols-3">

        {/* Left Side */}
        <div className="space-y-10 lg:col-span-2">

          <section>
            <h2 className="mb-4 text-xl font-bold">
              About This Event
            </h2>

            <p className="text-sm leading-7 text-gray-400">
              {event.description}
            </p>

            <p className="text-sm leading-7 text-gray-400 py-1">
                {event.description2}
             </p>   
          </section>

          {/* Event Highlights */}
          <section>
            <h2 className="mb-5 text-xl font-bold">
              Event Highlights
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {event.tags.map((tag, index) => (
                <div
                  key={tag}
                  className="rounded-xl border border-white/10 bg-[#1B1726] p-5"
                >
                  <h3 className="font-semibold">
                    {[
                      "Discover Something New",
                      "Explore the Experience",
                      "Connect with Others",
                      "Enjoy the Atmosphere",
                    ][index % 4]}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Be part of the {tag.toLowerCase()} experience.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Organiser */}
          <section className="rounded-xl border border-white/10 bg-[#1B1726] p-5">
            <p className="text-xs text-gray-400">
              Organised by
            </p>

            <h3 className="mt-2 text-lg font-bold">
              {event.organizer}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {event.attendees.toLocaleString()} expected attendees
            </p>
          </section>

        </div>

        {/* Right Side: Ticket Card */}
        <aside className="h-fit rounded-2xl border border-white/10 bg-[#1B1726] p-5 lg:sticky lg:top-6">

          <p className="text-sm text-gray-400">
            Starting from
          </p>

          <h2 className="mt-1 text-3xl font-extrabold text-purple-400">
            {event.price}
          </h2>

          <div className="mt-5 space-y-3">

            <div className="rounded-lg bg-[#100D18] p-4">
              <p className="text-xs text-gray-500">Date and time</p>
              <p className="mt-2 text-sm">{event.date}</p>
            </div>

            <div className="rounded-lg bg-[#100D18] p-4">
              <p className="text-xs text-gray-500">Location</p>
              <p className="mt-2 text-sm">{event.location}</p>
            </div>

          </div>

          <button
            onClick={() => alert("Booking functionality coming soon!")}
            className="mt-5 w-full rounded-lg bg-purple-600 py-3 font-semibold transition hover:bg-purple-700"
          >
            Get Tickets
          </button>

          <p className="mt-3 text-center text-xs text-gray-500">
            Check event details before booking.
          </p>
        </aside>

      </div>

      {/* Similar Events */}
      <section className="mx-auto max-w-7xl px-6 py-8 md:px-12">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">Similar Events</h2>

          <Link
            to="/events"
            className="text-xs text-purple-400 hover:text-purple-300"
          >
            VIEW ALL →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {similarEvents.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#1B1726] transition hover:-translate-y-1 hover:border-purple-500/60"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-4">
                <p className="text-xs text-purple-400">
                  {event.category}
                </p>

                <h3 className="mt-2 font-semibold">
                  {event.title}
                </h3>

                <p className="mt-2 text-xs text-gray-400">
                  📍 {event.location}
                </p>

                <div className="mt-4 flex justify-between">
                  <span className="text-sm font-semibold">
                    {event.price}
                  </span>

                  <span className="text-xs text-purple-400">
                    Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
};

export default EventDetails;
