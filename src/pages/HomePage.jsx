import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const HomePage = () => {
  return (
    <div>
      {/* NAVBAR */}
      <Nav/>


      {/* Hero */}
      

      <section
        className="flex min-h-[921px] items-center justify-center bg-cover bg-center px-6 pt-20"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(21,18,27,0.3), rgba(21,18,27,0.9)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6huQVm8Ae1kLvimktmYDvRSOEeUGjZJyUFKsTa8CYbK-IRdCW0iqT4GBlO2J2nkz5hv2J7khYBX4U3u6_ji2BSH-OCURkxh7Q0OQINqxX4snw63tKOIgoK7JFjdOhcbhFuFzW0wVs_NMOS_ichdi5LwanonQ0NJ-HYdq3T-gmqvIWwucS-9jDRVyXDFPptsDjBLx9BA1cDFWyUmm1b7dSqgqeJ7MIrbrD5ZYZZsVeoEO6VleyETDMSg')"
        }}
      >

        <div className="flex w-full max-w-7xl flex-col items-center text-center">

          {/* Heading */}
          <h2 className="max-w-4xl text-4xl font-extrabold leading-tight text-[#D2BBFF] md:text-6xl">

            Find your next unforgettable
            <br />

            experience.

          </h2>


          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#CCC3D8] md:text-lg">

            Discover curated concerts, exclusive meetups, immersive art
            installations, and more happening right now in your city.

          </p>


          {/* SEARCH BAR */}
          <div className="mt-12 flex w-full max-w-3xl flex-col gap-2 rounded-3xl border border-gray-700 bg-[#15151C]/80 p-2 backdrop-blur-xl md:flex-row md:rounded-full">

            {/* Search */}
            <div className="flex flex-1 items-center border-b border-gray-700 px-4 py-3 md:border-b-0 md:border-r">

              <span className="mr-3 text-gray-400">
                ⌕
              </span>

              <input
                type="text"
                placeholder="Search events, artists..."
                className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
              />

            </div>


            {/* Location */}
            <div className="flex flex-1 items-center border-b border-gray-700 px-4 py-3 md:border-b-0 md:border-r">

              <span className="mr-3 text-gray-400">
                ⌖
              </span>

              <input
                type="text"
                placeholder="Location"
                className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
              />

            </div>


            {/* Date */}
            <div className="flex flex-1 items-center px-4 py-3">

              <span className="mr-3 text-gray-400">
                □
              </span>

              <input
                type="text"
                placeholder="Date"
                className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
              />

            </div>


            {/* Search button */}
            <button className="rounded-full bg-[#7C3AED] px-8 py-4 font-semibold hover:bg-[#6D28D9]">

              Search

            </button>

          </div>


          {/* QUICK SUGGESTIONS */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">

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
    </div>
  );
};

export default HomePage;
