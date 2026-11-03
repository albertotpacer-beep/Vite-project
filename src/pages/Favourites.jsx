import { useEffect, useState } from "react";
import AuthPanel from "../components/AuthPanel";
import EventCard from "../components/EventCards";
import { useFavorites } from "../context/useFavorites";
import { supabase } from "../lib/supabase";

const Favourites = () => {
  const { user, favoriteIds, loading: authLoading, error: favoriteError, signOut } = useFavorites();
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    if (!user || !supabase || favoriteIds.length === 0) {
      return () => { active = false; };
    }

    Promise.resolve()
      .then(() => {
        if (active) setLoadingEvents(true);
        return supabase
          .from("events")
          .select("*")
          .in("id", favoriteIds);
      })
      .then(({ data, error: loadError }) => {
        if (!active) return;
        if (loadError) setError(loadError.message);
        else {
          setError("");
          setEvents(data ?? []);
        }
      })
      .finally(() => {
        if (active) setLoadingEvents(false);
      });

    return () => { active = false; };
  }, [favoriteIds, user]);

  return (
    <main className="min-h-[65vh] bg-black px-4 py-10 text-white sm:px-8 sm:py-14">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase text-violet-300">Your collection</p>
            <h1 className="mt-2 text-3xl font-bold sm:text-5xl">Favourites</h1>
            <p className="mt-3 text-sm text-gray-400">Events you have saved to come back to.</p>
          </div>
          {user && <button type="button" onClick={signOut} className="min-h-10 rounded-md border border-gray-700 px-4 text-sm hover:border-violet-500">Sign out</button>}
        </header>

        {authLoading ? (
          <p role="status" className="py-10 text-gray-400">Checking your session...</p>
        ) : !user ? (
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
            <div className="max-w-lg">
              <h2 className="text-xl font-semibold">Sign in to save events</h2>
              <p className="mt-3 leading-6 text-gray-400">Create an account or sign in to keep your saved events synced to your account.</p>
            </div>
            <AuthPanel />
          </div>
        ) : favoriteError || error ? (
          <p role="alert" className="rounded-md border border-red-900 bg-red-950/40 p-4 text-red-200">Could not load favourites: {favoriteError || error}</p>
        ) : loadingEvents ? (
          <p role="status" className="py-10 text-gray-400">Loading your favourites...</p>
        ) : favoriteIds.length === 0 || events.length === 0 ? (
          <div className="rounded-lg border border-gray-800 px-5 py-12 text-center">
            <h2 className="text-lg font-semibold">No saved events yet</h2>
            <p className="mt-2 text-sm text-gray-400">Use the heart on an event card to add it here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => <EventCard key={event.id} {...event} />)}
          </div>
        )}
      </div>
    </main>
  );
};

export default Favourites;
