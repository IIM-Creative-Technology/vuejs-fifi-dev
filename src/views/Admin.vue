<template>
  <div class="admin">
     <edit-post></edit-post>
      <edit-post-list></edit-post-list>
  </div>
</template>

<script>
// @ is an alias to /src
import EditPostList from "@/components/EditPostList.vue";
import EditPost from "@/components/EditPost.vue";

export default {
  name: "Admin",
  components: {
    EditPostList,
    EditPost
  }
};
</script>
