

const Footer = () => {
  return (


      <footer className="bg-black px-8 py-10 text-white">

      <div className="flex flex-col justify-between gap-6 md:flex-row">

          <div>
            <h2 className="font-bold text-pink-300">
              Evently
            </h2>

            <p className="mt-2 text-xs text-gray-500">
              © 2024 Evently. All rights reserved.
            </p>
          </div>


          <div className="flex flex-wrap gap-6 text-xs text-gray-500">

            <a href="/">Discover</a>
            <a href="/events">Events</a>
            <a href="/categories">Categories</a>
            <a href="/about">About</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>

          </div>

        </div>

      </footer>
      
     )
}

export default Footer

