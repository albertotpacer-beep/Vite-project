import { supabase, supabaseConfigError } from "../lib/supabase";

export async function fetchCategories() {
  if (!supabase) {
    throw new Error(supabaseConfigError);
  }

  const { data, error } = await supabase
    .from("categories")
    .select("id, name, slug, description, image, icon")
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}