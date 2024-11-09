import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export default class DataBase {
  constructor() {
    this.supabase = createClient(
      "https://unswumzybkmeifdigbfn.supabase.co",
      "KEY",
    );
  }
  async GetARowFrow(table, idToRow) {
    try {
      const { data, error } = await this.supabase
        .from(table)
        .select()
        .eq("id", idToRow);
      console.log(table, data);
      return data;
    } catch (e) {
      console.log("An Error has occured: " + e);
    }
  }

  async SignUpUser(email) {
    const { data, error } = await this.supabase.auth.signInWithOtp({
      email: email.value,
      options: {
        emailRedirectTo: "127.0.0.1:5001",
      },
    });

    if (error) {
      console.log("kunde inte skapa konto: ", error);
    }
  }

  async SignInUser(email) {
    try {
      const { data, error } = await this.supabase.auth.signInWithOtp({
        email: email.value,
        options: {
          emailRedirectTo: "127.0.0.1:5001/index.html",
        },
      });
      if (error) {
        console.log("swqeawd ", error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async LogOutUser() {
    try {
      let { error } = await this.supabase.auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
}
