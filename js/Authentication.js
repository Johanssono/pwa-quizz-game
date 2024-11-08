export default class Authentication {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  async SignUpUser(dataBase) {
    try {
      let { data, error } = await dataBase.auth.signUp({
        email: this.email,
        password: this.password,
      });
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
