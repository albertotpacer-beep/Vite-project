import { Link } from "react-router-dom";

const About = () => (
  <main className="min-h-[65vh] bg-black px-4 py-12 text-white sm:px-8 sm:py-16">
    <article className="mx-auto max-w-4xl">
      <p className="text-sm font-semibold uppercase text-violet-300">About Evently</p>
      <h1 className="mt-3 text-3xl font-bold sm:text-5xl">Make room for a good story.</h1>
      <p className="mt-6 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
        Evently brings local experiences into one place, so it is easier to find a show, discover a new idea, or spend an evening somewhere unexpected.
      </p>
      <div className="mt-10 grid gap-5 border-t border-gray-800 pt-8 sm:grid-cols-2 sm:gap-8">
        <section>
          <h2 className="text-xl font-semibold">What we value</h2>
          <p className="mt-3 leading-7 text-gray-400">Useful details, clear choices, and events that bring people together across music, art, technology, food, and culture.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Find your next event</h2>
          <p className="mt-3 leading-7 text-gray-400">Browse the listings, filter by what matters to you, and save events to your account for later.</p>
          <Link to="/events" className="mt-5 inline-block font-semibold text-violet-300 hover:text-violet-200">Explore events →</Link>
        </section>
      </div>
    </article>
  </main>
);

export default About;
