import { supabase, supabaseConfigError } from "../lib/supabase";

export async function fetchEvents() {
  if (!supabase) {
    throw new Error(supabaseConfigError);
  }

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export async function fetchEventById(id) {
  if (!supabase) {
    throw new Error(supabaseConfigError);
  }

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}