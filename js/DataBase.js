import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export default class DataBase {
  constructor() {
    this.supabase = createClient(
      "https://unswumzybkmeifdigbfn.supabase.co",
      "KEY",
    );
  }

  async GetARowFrom(table, idToRow) {
    const { data, error } = await this.supabase
      .from(table)
      .select()
      .eq("id", idToRow);

    if (error) {
      console.log("Kunde inte hämta data: ", error);
      return;
    }

    return data;
  }

  async SignUpUser(email, password) {
    if (password[0] !== password[1]) {
      alert("Lösenorden är inte samma");
      return;
    }

    const { data, error } = await this.supabase.auth.signInWithOtp({
      email: email,
      password: password,
    });

    if (error) {
      console.log("kunde inte skapa konto: ", error);
    }
  }

  async SignInUser(email) {
    const { data, error } = await this.supabase.auth.signInWithOtp({
      email: email,
      password: password,
    });
    if (error) {
      console.log("Kunde inte logga in användaren: ", error);
    }
  }

  async LogOutUser() {
    let { error } = await this.supabase.auth.signOut();

    if (error) {
      console.log("Kunde inte logga ut användaren: ", error);
    }
  }
}
