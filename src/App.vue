<template>
  <div id="app">
    <section class="container">
    <div id="nav">
      <router-link :to="{name: 'Admin'}">Gérer le blog</router-link> |
      <router-link :to="{name: 'Blog'}">Blog</router-link> |
      <router-link :to="{name: 'Login'}">Login</router-link>
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
  color: #2c3e50;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  border-bottom: 5px solid black;
  padding-bottom: 6px;
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


/*  font-family: 'Redressed', cursive;  */
@import url('https://fonts.googleapis.com/css2?family=Redressed&display=swap');

/*  font-family: 'Nunito Sans', sans-serif;  */
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap');

/* font-family: 'Inconsolata', monospace;  */
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');

h1{
  font-family: 'Inconsolata', monospace;
}

img{
  width: 100%;
  height: auto;
  display: block;
}

nav{
  /* aligner le texte */
  text-align: left;
  margin-bottom: 5vh;
  font-family: 'Inconsolata', monospace;
}

ul{
  /* Pour enlever k'effet de list */
  list-style: none;
  margin: 0;

}

li{
  /* Pour aligner */
  display: inline-block;
  margin: 20px 20px;
}

/* Affetcte que les a enfants de li */
li a{
  text-decoration: none;
  color: white;
  /*changer la taille de la police*/
  font-size: 22px;
}

.date{
  font-family: 'Inconsolata', monospace;
}

.author{
  font-family: 'Inconsolata', monospace;
}

/* CARD */
.card{
  width: 80%;
  margin: 0px auto;
  display: flex;
  color: white;
  justify-content: space-around;
  border: 5px solid black;
  background: brown;
  padding: 5px 10px;
}

.card-header{
  width: 100%;
}

.card-header img{
  width: 100%;
  margin: 10% auto;
}

.card-body{
  margin-left: 30px;
}

.card-body a{
  text-decoration: none;
  color: white;
}

.fa-long-arrow-alt-right{
  margin-top: 5marginpx;
}

.fas{
  color: white;
  font-size: 20px;
}



footer{
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 1vh;
  display: flex;
  justify-content: center;
}

.logo{
  width: 40px;
  margin: auto 10px;
}


@media screen and (max-width: 640px) {
  .card {
    display:block;
    padding: 5px 5px;
  }

  .card-header img{
    margin: 2% auto;
  }
}





/**/

</style>
