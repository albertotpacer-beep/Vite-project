import { useEffect, useState } from "react";
import { FavoritesContext } from "./favoritesContextValue";
import { supabase, supabaseConfigError } from "../lib/supabase";

export function FavoritesProvider({ children }) {
  const [user, setUser] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [loading, setLoading] = useState(!supabase);
  const [error, setError] = useState(supabaseConfigError ?? "");

  useEffect(() => {
    if (!supabase) return undefined;

    let active = true;
    const loadFavoriteIds = async (userId) => {
      const { data, error: loadError } = await supabase
        .from("event_favourites")
        .select("event_id")
        .eq("user_id", userId);

      if (!active) return;
      if (loadError) {
        setError(loadError.message);
        setFavoriteIds([]);
        return;
      }

      setError("");
      setFavoriteIds(data.map((favorite) => String(favorite.event_id)));
    };

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setFavoriteIds([]);
        if (session?.user) {
          void loadFavoriteIds(session.user.id);
        } else {
          setLoading(false);
        }
      },
    );

    supabase.auth.getSession().then(({ data, error: sessionError }) => {
      if (!active) return;
      if (sessionError) setError(sessionError.message);
      const currentUser = data.session?.user ?? null;
      setUser(currentUser);
      if (currentUser) {
        void loadFavoriteIds(currentUser.id).finally(() => setLoading(false));
      } else {
        setLoading(false);
      }
    });

    return () => {
      active = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  async function toggleFavorite(eventId) {
    if (!user || !supabase) {
      return { error: "Sign in to save events to your favourites." };
    }

    const eventIdString = String(eventId);
    const isFavorite = favoriteIds.includes(eventIdString);
    const request = isFavorite
      ? supabase
          .from("event_favourites")
          .delete()
          .eq("user_id", user.id)
          .eq("event_id", eventId)
      : supabase.from("event_favourites").insert({
          user_id: user.id,
          event_id: eventId,
        });

    const { error: toggleError } = await request;
    if (toggleError) {
      setError(toggleError.message);
      return { error: toggleError.message };
    }

    setError("");
    setFavoriteIds((currentIds) =>
      isFavorite
        ? currentIds.filter((currentId) => currentId !== eventIdString)
        : [...currentIds, eventIdString],
    );
    return { error: "" };
  }

  async function signOut() {
    if (!supabase) return;
    const { error: signOutError } = await supabase.auth.signOut();
    if (signOutError) setError(signOutError.message);
  }

  async function signIn(email, password) {
    if (!supabase) return { error: supabaseConfigError };
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) setError(signInError.message);
    return { error: signInError?.message ?? "" };
  }

  async function signUp(email, password) {
    if (!supabase) return { error: supabaseConfigError };
    const { error: signUpError } = await supabase.auth.signUp({ email, password });
    if (signUpError) setError(signUpError.message);
    return { error: signUpError?.message ?? "" };
  }

  return (
    <FavoritesContext.Provider
      value={{ user, favoriteIds, loading, error, setError, toggleFavorite, signIn, signUp, signOut }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}