import { createClient } from "@supabase/supabase-js";

export default class DataBase {
  constructor() {
    this.supabase = createClient(
      "https://unswumzybkmeifdigbfn.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVuc3d1bXp5YmttZWlmZGlnYmZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MzUwOTAsImV4cCI6MjA0MzAxMTA5MH0.dtg6STJJZEJIpRLy7dNr1lSnG4qvAEELkvrjcCzjPYo",
    );
  }
  async SupabaseApi() {
    // Create a single supabase client for interacting with your database

    let { data: Quizz, error } = await this.supabase
      .from("Quizz")
      .select("")
      .match({ id: 2 });

    console.log("Hej");
  }
}
