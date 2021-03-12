<template>
  <div id="app">
    <section class="container">
    <div id="nav">
      <router-link to="/admin">Gerer le blog</router-link> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <div id="footer">
       <p>© - Website Made With Love By </p> 
        <img class="logo" src="@/assets/img/fifi_black.png" alt="logo Fideline Bazana"> 
        <p>- ©</p>
    </div>
    </section>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#footer{
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 1vh;
  display: flex;
  justify-content: center;
}

#footer .logo{
  width: 40px;
  margin: auto 10px;
}
</style>
