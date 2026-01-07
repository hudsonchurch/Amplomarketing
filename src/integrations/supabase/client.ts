import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tuqdgmlrhjdwbnujavpe.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1cWRnbWxyaGpkd2JudWphdnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3Mjc0MTYsImV4cCI6MjA4MzMwMzQxNn0.LAFys1AejLZp6RpF2dQYc5O3kwWdMQLs7_I1RqznVNk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Import the supabase client like this:
// For React:
// import { supabase } from "@/integrations/supabase/client";
// For React Native:
// import { supabase } from "@/src/integrations/supabase/client";
