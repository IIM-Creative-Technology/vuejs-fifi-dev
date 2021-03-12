<template>
  <div class="Blog">
      <post-list></post-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";

export default {
  name: "Blog",
  components: {
    PostList
  }
};
</script>
