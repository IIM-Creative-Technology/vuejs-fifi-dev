<template>
  <div class="home">
      <edit-post-list></edit-post-list>
  </div>
</template>

<script>
// @ is an alias to /src
import EditPostList from "@/components/EditPostList.vue";

export default {
  name: "Home",
  components: {
    EditPostList
  }
};
</script>
