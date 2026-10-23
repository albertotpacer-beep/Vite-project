
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Nav = () => {
  // Track whether the small-screen navigation menu is visible.
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative bg-black px-4 py-4 text-gray-300 md:px-8 md:py-5">
      <div className="flex items-center justify-between">
        <Link to="/" onClick={closeMenu}>
          <h1 className="text-2xl font-bold text-[#7C3AED]">Evently</h1>
        </Link>

        {/* Keep the full navigation row for tablet and desktop widths. */}
        <div className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-8">
            <Link to="/events" className="hover:text-[#A476FF]">
              Discover
            </Link>
            <Link to="/events" className="hover:text-[#A476FF]">
              Events
            </Link>
            <Link to="/categories" className="hover:text-[#A476FF]">
              Categories
            </Link>
            <Link to="/about" className="hover:text-[#A476FF]">
              About
            </Link>
            <Link to="/favourites" className="hover:text-[#A476FF]">
              Favourites
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <button type="button" aria-label="Favourites" className="text-xl">
              ♡
            </button>
            <button type="button" aria-label="Search" className="text-4xl">
              ⌕
            </button>
            <Link
              to="/events"
              className="rounded-full bg-purple-500 px-6 py-3 font-semibold text-white hover:bg-purple-400"
            >
              Explore Events
            </Link>
          </div>
        </div>

        {/* Toggle the compact menu on mobile screens. */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-2xl hover:bg-white/10 md:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Show mobile links only while the menu is open; each link closes it. */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full z-50 border-t border-white/10 bg-black px-4 pb-5 pt-3 shadow-xl md:hidden"
        >
          <div className="flex flex-col">
            <Link to="/events" onClick={closeMenu} className="py-3 hover:text-[#A476FF]">
              Discover
            </Link>
            <Link to="/events" onClick={closeMenu} className="py-3 hover:text-[#A476FF]">
              Events
            </Link>
            <Link to="/categories" onClick={closeMenu} className="py-3 hover:text-[#A476FF]">
              Categories
            </Link>
            <Link to="/about" onClick={closeMenu} className="py-3 hover:text-[#A476FF]">
              About
            </Link>
            <Link to="/favourites" onClick={closeMenu} className="py-3 hover:text-[#A476FF]">
              Favourites
            </Link>
            <Link
              to="/events"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-purple-500 px-5 py-3 text-center font-semibold text-white hover:bg-purple-400"
            >
              Explore Events
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav
