
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase URL or Key is missing. Database operations will fail.');
}

// Create a client if keys exist, otherwise export a dummy object that logs errors
export const supabase = (supabaseUrl && supabaseKey) 
  ? createClient(supabaseUrl, supabaseKey)
  : {
      from: () => ({
        select: () => ({ order: () => ({ limit: () => Promise.resolve({ data: [], error: new Error("Supabase not configured") }) }) }),
        insert: () => Promise.resolve({ error: new Error("Supabase not configured") })
      })
    };
