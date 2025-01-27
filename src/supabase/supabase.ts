import { SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.REACT_APP_SUPA_URL as string;
const SUPABASE_KEY = process.env.REACT_APP_SUPA_KEY as string;

export const supabase = new SupabaseClient(SUPABASE_URL, SUPABASE_KEY);
