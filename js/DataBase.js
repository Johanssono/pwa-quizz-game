import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export default class DataBase {
  constructor() {
    this.supabase = createClient(
      "https://unswumzybkmeifdigbfn.supabase.co",
      "KEY",
    );
  }
  async GetARowFrom(table, idToRow) {
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

  async SignUpUser(email, password) {
    const { data, error } = await this.supabase.auth.signInWithOtp({
      email: email.value,
      password: email.value,
    });

    if (error) {
      console.log("kunde inte skapa konto: ", error);
    }
  }

  async SignInUser(email, password) {
    try {
      const { data, error } = await this.supabase.auth.signInWithOtp({
        email: email.value,
        password: password.value,
      });
      if (error) {
        console.log("swqeawd ", error);
      }
      console.log(this.supabase.auth.getUser());
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

  async GetUser() {
    const {
      data: { user },
    } = await this.supabase.auth.getUser();
    return user;
  }

  async CreateGame() {
    const initialPoints = 0;
    const user = await this.GetUser();

    const { data, error } = await this.supabase
      .from("activeGames")
      .insert([
        {
          player1Points: initialPoints,
          player2Points: initialPoints,
          playerTurn: user.id,
          userId1: user.id,
        },
      ])
      .select();
  }

  async GetAllActiveGames() {
    const { data, error } = await this.supabase.from("activeGames").select();

    return data;
  }

  async UpdateSpesificActiveGame(activeGameId) {
    const user = await this.GetUser();
    console.log("hej sjwojdk: ", user.id);

    const { data, error } = await this.supabase
      .from("activeGames")
      .update({ userId2: user.id })
      .eq("id", activeGameId)
      .select();

    /*const { data, error } = await this.supabase
      .from("activeGames")
      .select()
      .eq("id", activeGameId)
      .update(
        {
          userId2: user.id,
        }
      );*/
  }
}
