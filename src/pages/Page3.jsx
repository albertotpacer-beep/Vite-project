import React from 'react'

const Page3 = () => {
  return (
    <div className='bg-black'>
      <nav className="flex items-center justify-between px-8 py-5 bg-black">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#7C3AED]">Evently</h1>

        {/* Navigation */}
        <div className=" md:flex items-center gap-8 text-gray-300">
          <a
            href="/"
            className="hover:underline decoration-2 underline-offset-8 hover:text-[#A476FF]"
          >
            Discover
          </a>

          <a
            href="/events"
            className="hover:underline decoration-2 underline-offset-8 hover:text-[#A476FF]"
          >
            Events
          </a>

          <a
            href="/categories"
            className="hover:underline decoration-2 underline-offset-8 hover:text-[#A476FF]"
          >
            Categories
          </a>

          <a
            href="/about"
            className="hover:underline decoration-2 underline-offset-8 hover:text-[#A476FF]"
          >
            About
          </a>
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



    </div>
  )
}

export default Page3
