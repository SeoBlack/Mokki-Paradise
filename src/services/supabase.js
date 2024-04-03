import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ouadewmurhpbyuqswfqz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91YWRld211cmhwYnl1cXN3ZnF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MDc4MTMsImV4cCI6MjAyNzM4MzgxM30.hYz0L_BKXboTB6eOEfMo8-tLYkmr4V4YawUpq67Nsow";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
