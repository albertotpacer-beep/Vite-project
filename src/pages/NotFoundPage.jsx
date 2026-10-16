import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-[calc(100vh-9rem)] flex-col items-center justify-center bg-black px-6 text-center text-white">
      <p className="mb-5 bg-gradient-to-b from-[#f3d8ff] via-[#a855d4] to-[#4c1d6b] bg-clip-text text-7xl font-black leading-none text-transparent sm:text-8xl md:text-9xl">
        Error 404
      </p>
      <h1 className="text-4xl font-bold sm:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-md text-gray-400">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-md bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
      >
        Back to home
      </Link>
    </main>
  );
};

export default NotFoundPage;