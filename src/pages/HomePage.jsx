
import { useState } from "react";
import Card from "../components/Card";
import { categories } from "../constants/data";

const HomePage = () => {

  const [menuOpen , setMenuOpen] = useState()

  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(json => setMenuOpen(json))
  console.log(menuOpen)
  
  return (
    <div className="flex min-h-screen flex-col">
      {/* HERO */}
      <main className="flex-1">
        <section
          className="flex min-h-[34rem] items-center justify-center bg-cover bg-center px-4 py-14 sm:min-h-[40rem] sm:px-6 sm:py-20"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(21,18,27,0.3), rgba(21,18,27,0.9)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6huQVm8Ae1kLvimktmYDvRSOEeUGjZJyUFKsTa8CYbK-IRdCW0iqT4GBlO2J2nkz5hv2J7khYBX4U3u6_ji2BSH-OCURkxh7Q0OQINqxX4snw63tKOIgoK7JFjdOhcbhFuFzW0wVs_NMOS_ichdi5LwanonQ0NJ-HYdq3T-gmqvIWwucS-9jDRVyXDFPptsDjBLx9BA1cDFWyUmm1b7dSqgqeJ7MIrbrD5ZYZZsVeoEO6VleyETDMSg')",
          }}
        >
          <div className="flex w-full max-w-7xl flex-col items-center text-center">
            {/* Heading */}
            <h2 className="max-w-4xl text-3xl font-extrabold leading-tight text-[#D2BBFF] sm:text-4xl md:text-6xl">
              Find your next unforgettable
              <br className="hidden sm:block" />
              experience.
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-sm leading-6 text-[#CCC3D8] sm:mt-6 sm:text-base sm:leading-7 md:text-lg">
              Discover curated concerts, exclusive meetups, immersive art
              installations, and more happening right now in your city.
            </p>

            {/* SEARCH BAR */}
            <div className="mt-8 flex w-full max-w-3xl flex-col gap-1 rounded-2xl border border-gray-700 bg-[#15151C]/80 p-2 backdrop-blur-xl sm:mt-10 sm:gap-2 sm:rounded-3xl md:flex-row md:rounded-full">
              {/* Search */}
              <div className="flex flex-1 items-center border-b border-gray-700 px-4 py-3 md:border-b-0 md:border-r">
                <span className="mr-3 text-gray-400">⌕</span>

                <input
                  type="text"
                  placeholder="Search events, artists..."
                  className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                />
              </div>

              {/* Location */}
              <div className="flex flex-1 items-center border-b border-gray-700 px-4 py-3 md:border-b-0 md:border-r">
                <span className="mr-3 text-gray-400">⌖</span>

                <input
                  type="text"
                  placeholder="Location"
                  className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                />
              </div>

              {/* Date */}
              <div className="flex flex-1 items-center px-4 py-3">
                <span className="mr-3 text-gray-400">□</span>

                <input
                  type="text"
                  placeholder="Date"
                  className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
                />
              </div>

              {/* Search button */}
              <button className="min-h-12 rounded-xl bg-[#7C3AED] px-6 py-3 font-semibold hover:bg-[#6D28D9] sm:rounded-full sm:px-8 sm:py-4">
                Search
              </button>
            </div>

            {/* QUICK SUGGESTIONS */}
            <div className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6 sm:gap-3">
              <button className="rounded-full border border-gray-700 bg-[#221E28]/80 px-4 py-2 text-sm text-gray-300 hover:border-[#7C3AED] hover:text-[#D2BBFF]">
                Concerts
              </button>

              <button className="rounded-full border border-gray-700 bg-[#221E28]/80 px-4 py-2 text-sm text-gray-300 hover:border-[#7C3AED] hover:text-[#D2BBFF]">
                Tech
              </button>

              <button className="rounded-full border border-gray-700 bg-[#221E28]/80 px-4 py-2 text-sm text-gray-300 hover:border-[#7C3AED] hover:text-[#D2BBFF]">
                This Weekend
              </button>

              <button className="rounded-full border border-gray-700 bg-[#221E28]/80 px-4 py-2 text-sm text-gray-300 hover:border-[#7C3AED] hover:text-[#D2BBFF]">
                Free Events
              </button>
            </div>
          </div>
        </section>

        {/* <section>

          {menuOpen.map((data) =>(
            <p>{data.id}</p>
          ))}

        </section> */}

        <section className="bg-[#000000] px-4 py-6 sm:px-8 sm:py-8">
          <h2 className="mb-4 text-2xl font-bold text-[#958E9B] sm:mb-6 sm:text-3xl">
            Browse by Category
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {categories.map((category) => {
              return (
                <Card
                  key={category.title}
                  title={category.title}
                  image={category.image}
                  icon={category.icon}
                />
              );
            })}
          </div>
        </section>

      </main>
    </div>
  );
};

export default HomePage;
