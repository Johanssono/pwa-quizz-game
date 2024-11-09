import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

export default class Authentication {
  constructor() {
    this.email = document.getElementById("email");
    this.password = [
      document.getElementById("password1"),
      document.getElementById("password2"),
    ];
  }

  async SignUpUser(dataBase) {
    try {
      let { data, error } = await dataBase.supabase.auth.signUp({
        email: this.email.value,
        password: this.password.value,
      });
      console.log(dataBase);
      return dataBase;
    } catch (error) {
      console.error(error);
    }
  }

  async LogInUser(dataBase) {
    try {
      let { data, error } = await dataBase.auth.signInWithPassword({
        email: this.email,
        password: this.password,
      });
      return dataBase;
    } catch (error) {
      console.log(error);
    }
  }

  async LogOutUser(dataBase) {
    try {
      let { error } = await dataBase.auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
}
