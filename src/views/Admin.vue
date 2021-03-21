<template>
  <div class="admin">
      <edit-post-list></edit-post-list>
  </div>
</template>

<script>
// @ is an alias to /src
import EditPostList from "@/components/EditPostList.vue";

export default {
  name: "Admin",
  components: {
    EditPostList,
  }
};
</script>
