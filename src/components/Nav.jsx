
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-black">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#7C3AED]">Evently</h1>

        {/* Navigation */}
        <div className=" md:flex items-center gap-8 text-gray-300">
          <Link
            to="/Contact" target='_blank'
            className="hover:underline decoration-2 underline-offset-8 hover:text-[#A476FF]"
          >
            Discover
          </Link>

          <Link
            to="/Page-three"
            className="hover:underline decoration-2 underline-offset-8 hover:text-[#A476FF]"
          >
            Events
          </Link>

          <Link
            to="/categories " target='_blank'
            className="hover:underline decoration-2 underline-offset-8 hover:text-[#A476FF]"
          >
            Categories
          </Link>

          <Link
            to="/about"
            className="hover:underline decoration-2 underline-offset-8 hover:text-[#A476FF]"
          >
            About
         </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <button className="text-xl">♡</button>

          <button className="text-4xl">⌕</button>

          <button className="rounded-full bg-purple-500 px-6 py-3 font-semibold hover:bg-purple-400">
            Explore Events
          </button>
        </div>
      </nav>
  )
}

export default Nav
