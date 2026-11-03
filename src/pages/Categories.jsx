import { useEffect, useState } from "react";
import Card from "../components/Card";
import { fetchCategories } from "../services/categories";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    fetchCategories()
      .then((data) => {
        if (active) setCategories(data);
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

  return (
    <main className="min-h-[65vh] bg-black px-4 py-10 text-white sm:px-8 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-violet-300">Explore</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-5xl">Categories</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
          Find gatherings and experiences by the things you love.
        </p>

        {loading ? (
          <p role="status" className="py-16 text-center text-gray-400">Loading categories...</p>
        ) : error ? (
          <p role="alert" className="mt-8 rounded-md border border-red-900 bg-red-950/40 p-4 text-red-200">
            Categories could not be loaded: {error}
          </p>
        ) : categories.length === 0 ? (
          <p className="py-16 text-center text-gray-400">No categories are available yet.</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {categories.map((category) => (
              <Card key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Categories;