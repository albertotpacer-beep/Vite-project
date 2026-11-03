import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabaseConfigError =
  !supabaseUrl || !supabasePublishableKey
    ? "Set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY in .env.local, then restart Vite."
    : null;

export const supabase = supabaseConfigError
  ? null
  : createClient(supabaseUrl, supabasePublishableKey);