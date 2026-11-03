import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { fetchCategories } from "../services/categories";

const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD6huQVm8Ae1kLvimktmYDvRSOEeUGjZJyUFKsTa8CYbK-IRdCW0iqT4GBlO2J2nkz5hv2J7khYBX4U3u6_ji2BSH-OCURkxh7Q0OQINqxX4snw63tKOIgoK7JFjdOhcbhFuFzW0wVs_NMOS_ichdi5LwanonQ0NJ-HYdq3T-gmqvIWwucS-9jDRVyXDFPptsDjBLx9BA1cDFWyUmm1b7dSqgqeJ7MIrbrD5ZYZZsVeoEO6VleyETDMSg";

const HomePage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [categoryError, setCategoryError] = useState("");
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    let active = true;

    fetchCategories()
      .then((data) => {
        if (active) setCategories(data);
      })
      .catch((error) => {
        if (active) setCategoryError(error.message);
      })
      .finally(() => {
        if (active) setCategoriesLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  function submitSearch(event) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (location.trim()) params.set("location", location.trim());
    if (date) params.set("date", date);
    navigate(`/events${params.size ? `?${params}` : ""}`);
  }

  function searchSuggestion(value) {
    const params = new URLSearchParams();
    if (value === "Music" || value === "Technology") {
      params.set("category", value.toLowerCase());
    } else if (value === "Free") {
      params.set("price", "free");
    } else if (value === "This Weekend") {
      params.set("when", "weekend");
    }
    navigate(`/events?${params}`);
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section
        className="flex min-h-136 items-center justify-center bg-cover bg-center px-4 py-14 sm:min-h-160 sm:px-6 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(21,18,27,0.3), rgba(21,18,27,0.92)), url('${heroImage}')`,
        }}
      >
        <div className="flex w-full max-w-7xl flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase text-violet-200 sm:text-sm">
            Experiences worth showing up for
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight text-[#D2BBFF] sm:text-4xl md:text-6xl">
            Find your next unforgettable
            <br className="hidden sm:block" /> experience.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#CCC3D8] sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
            Discover concerts, meetups, immersive art, and more happening near you.
          </p>

          <form
            onSubmit={submitSearch}
            className="mt-8 grid w-full max-w-4xl gap-1 rounded-2xl border border-white/15 bg-[#15151C]/90 p-2 backdrop-blur-xl sm:mt-10 sm:gap-2 sm:rounded-3xl md:grid-cols-[1.4fr_1fr_1fr_auto] md:rounded-full"
          >
            <label className="flex min-w-0 items-center gap-3 border-b border-white/10 px-4 py-3 md:border-b-0 md:border-r">
              <span aria-hidden="true" className="text-gray-400">⌕</span>
              <span className="sr-only">Search events</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="search"
                placeholder="Events or artists"
                className="min-w-0 w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              />
            </label>
            <label className="flex min-w-0 items-center gap-3 border-b border-white/10 px-4 py-3 md:border-b-0 md:border-r">
              <span aria-hidden="true" className="text-gray-400">⌖</span>
              <span className="sr-only">Location</span>
              <input
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                type="search"
                placeholder="Location"
                className="min-w-0 w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
              />
            </label>
            <label className="flex min-w-0 items-center gap-3 px-4 py-3">
              <span aria-hidden="true" className="text-gray-400">□</span>
              <span className="sr-only">Event date</span>
              <input
                value={date}
                onChange={(event) => setDate(event.target.value)}
                type="date"
                className="min-w-0 w-full bg-transparent text-sm text-gray-300 outline-none"
              />
            </label>
            <button
              type="submit"
              className="min-h-12 rounded-xl bg-[#7C3AED] px-6 py-3 font-semibold hover:bg-[#6D28D9] md:rounded-full"
            >
              Search events
            </button>
          </form>

          <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 sm:gap-3">
            {["Music", "Technology", "This Weekend", "Free"].map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => searchSuggestion(suggestion)}
                className="min-h-10 rounded-full border border-gray-700 bg-[#221E28]/80 px-4 py-2 text-sm text-gray-300 hover:border-[#7C3AED] hover:text-[#D2BBFF]"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3 sm:mb-6">
            <div>
              <p className="text-sm font-semibold uppercase text-violet-300">Find your scene</p>
              <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">Browse by category</h2>
            </div>
            <Link to="/categories" className="text-sm text-violet-300 hover:text-violet-200">
              All categories →
            </Link>
          </div>

          {categoryError ? (
            <p role="alert" className="rounded-md border border-red-900 bg-red-950/40 p-4 text-red-200">
              Categories could not be loaded: {categoryError}
            </p>
          ) : categoriesLoading ? (
            <p role="status" className="py-10 text-gray-400">Loading categories...</p>
          ) : categories.length === 0 ? (
            <p className="py-10 text-gray-400">No categories are available yet.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {categories.map((category) => (
                <Card key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
