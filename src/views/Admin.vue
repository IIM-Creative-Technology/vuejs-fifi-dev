<template>
  <div class="admin"><new-post></new-post>
      <edit-post-list></edit-post-list>
      <edit-post></edit-post>
  </div>
</template>

<script>
// @ is an alias to /src
import EditPostList from "@/components/EditPostList.vue";
import EditPost from "@/components/EditPost.vue";
import NewPost from '../components/NewPost.vue';

export default {
  name: "Admin",
  components: {
    EditPostList,
    EditPost,
    NewPost
  }
};
</script>
