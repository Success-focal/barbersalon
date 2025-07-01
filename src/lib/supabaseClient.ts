/**
 * supabase – Initialized Supabase client instance for interacting with the backend.
 * Uses environment variables for URL and anonymous key to keep sensitive info secure.
 * This client handles all database and authentication operations throughout the app.
 */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
