<template>
  <div class="login-form">
      <div class="cont">
      <div class="form">
        <form action="">
          <h1>Login</h1>
          <v-alert color="error" :value="error">
            Le mot de passe ou le nom d'utilisateur est incorect
          </v-alert>
          <input v-model="username" type="text"
          class="user"
          placeholder="Username"/>
          <input v-model="password" type="password"
          class="pass"
          placeholder="Password"/>
          <button @click.prevent="login()" class="login">Login</button>
          <div class="sign-up">
            <a href="#">S'inscrire</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "login",
    data: () => ({
      username: '',
      password: '',
      error: false
    }),
    methods : {
      login() {
        this.$store.dispatch("LOGIN", {
          _username: this.username,
          _password: this.password
        })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*  font-family: 'Nunito Sans', sans-serif;  */
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');

.cont{
  position: relative;
  width: 30%;
  height: 450px;
  padding: 10px 25px;
  margin: auto;
  background: #fff;
  border-radius: 8px;
}

.form{ width: 100%; height: 100%; }

h1, h2, .user, .pass{
  text-align: center;
  display: block;
}

h1{
  color: #606060;
  font-weight: bold;
  font-size: 40px;
  margin: 30px auto;
}

.sign-up{
  text-align: center;
}

.sign-up a{
  color: black;
  font-size: 16px;
}

.user, .pass, .login{
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  font-weight: lighter;
  margin-bottom: 20px;
}

.user, .pass{
  background: #ecf0f1;
  cursor: text;
  font-family: 'Redressed', cursive;
 }

.login{
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  background-color: brown;
  transition: background 0.4s ease;
}

.login:hover{ background: #7a1b38; }

@media only screen and (min-width : 280px) {
  .cont{ width: 90% }
}

@media only screen and (min-width : 480px) {
  .cont{ width: 60% }
}

@media only screen and (min-width : 768px) {
  .cont{ width: 40% }
}

@media only screen and (min-width : 992px) {
  .cont{ width: 30% }
}

h2{ color: #fff; margin-top: 25px; }


</style>
