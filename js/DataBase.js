import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

class DataBase {
  constructor() {
    this.supabase = createClient(
      "https://unswumzybkmeifdigbfn.supabase.co",
    );
    this.btnDBRequest = document.getElementById("btnDBRequest");
    this.displayData = document.getElementById("dBData");
  }
  SupabaseApi() {
    // Create a single supabase client for interacting with your database

    /*let { data: Quizz, error } = await this.supabase
      .from("Quizz")
      .select("")
      .match({ id: 2 });

    */
    this.btnDBRequest.addEventListener("click", async (event) => {
        console.log("loading...");

        try {
            const { data, sak } = await this.supabase
            .from('Quizz')
            .eq('id', 2);
            this.displayData.innerHTML = data;
        }
        catch (even) {
            console.log("An Error has occured: " + event);
        }
    })
  }
}

export default DataBase;