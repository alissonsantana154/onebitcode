class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login realizao com sucesso!");
    } else {
      console.log("falha ao fazer login! Email ou senha incorretos.");
    }
  }
}

const alisson = new User("Alisson Santana", "alissonteste@email.com", "1234");

console.log(alisson);
alisson.login("alissonteste@email.com", "1234");
