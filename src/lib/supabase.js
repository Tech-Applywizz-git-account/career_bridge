import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseUrl.startsWith('http')) {
  console.warn('Supabase URL is missing or invalid. Check your .env file.');
}

// We initialize even if values are missing, but wrap it so it doesn't crash the whole app on import
// Note: createClient will throw if passed an invalid URL.
export const supabase = (supabaseUrl && supabaseUrl.startsWith('http')) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;
