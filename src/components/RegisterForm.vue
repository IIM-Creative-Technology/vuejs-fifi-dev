<template>
  <div class="register-form">
      <div class="cont">
      <div class="form">
        <form @submit.prevent="handleSubmit()">
          <h1>Login</h1>
          <input type="text"
          class="user"
          v-model="username"
          placeholder="username"/>
          <input type="email"
          class="user"
          v-model="email"
          placeholder="E-mail"/>
          <input type="password"
          class="pass"
          v-model="password"
          placeholder="mot de passe"/>
          <input type="password"
          class="pass"
          v-model="password_confirm"
          placeholder=" confirmer mot de passe"/>
          <button @click="handleSubmit()"  class="login">Login</button>
          <div class="sign-up">
            <a href="/login">Se connecter</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'register-form',

    data() {
      return {
        username: '',
        email: '',
        password: '',
        password_confirm: '',
      }
    },

    methods: {
      async handleSubmit(){
        const response = await axios.post("register", {
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm,
        });
        console.log(response);
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
  background-color: #101321;
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
