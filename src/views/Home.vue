<template>
  <div class="home">
    <h1>Bienvenu !</h1>
    <h2>Sité réalisé par Fideline Bazana Ntomo</h2>
    <test-post></test-post>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import TestPost from '../components/TestPost.vue';

export default {
  name: "Home",
  components: {
    //HelloWorld
    TestPost
  }
};
</script>
