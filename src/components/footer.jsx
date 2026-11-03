import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black px-4 py-8 text-white sm:px-8 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-gray-800 pt-6 sm:flex-row sm:items-end">
        <div>
          <Link to="/" className="font-bold text-pink-300">Evently</Link>
          <p className="mt-2 text-xs text-gray-500">© {new Date().getFullYear()} Evently.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-gray-400">
          <Link className="hover:text-white" to="/events">Discover</Link>
          <Link className="hover:text-white" to="/events">Events</Link>
          <Link className="hover:text-white" to="/categories">Categories</Link>
          <Link className="hover:text-white" to="/about">About</Link>
          <Link className="hover:text-white" to="/contact">Contact</Link>
          <Link className="hover:text-white" to="/privacy">Privacy</Link>
          <Link className="hover:text-white" to="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer

