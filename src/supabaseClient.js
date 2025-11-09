import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://luzkssmslqjdcezpjfvg.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1emtzc21zbHFqZGNlenBqZnZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NjAzNTcsImV4cCI6MjA3ODIzNjM1N30.VTasbwUV9tvxcyJKuGrUKg0gNCR55CygnsdTE_zrhTI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);