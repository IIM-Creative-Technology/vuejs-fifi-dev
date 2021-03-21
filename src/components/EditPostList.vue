<template>
  <div class="edit-post-list">
       <edit-post></edit-post>
    <edit-post-item v-for="post in postsFiltered" :key="post.id" :post="post" :checkAll="!anyRemaining"></edit-post-item>
  </div>
</template>

<script>
import EditPost from './EditPost.vue'
import EditPostItem from './EditPostItem.vue'
export default {
  name: 'edit-post-list',
  components: {
    EditPostItem,
    EditPost,
  },
  data() {
    return {
      newPost: '',
      idForPost: 3,
    }
  },
  computed: {
    anyRemaining() {
      return this.$store.getters.anyRemaining
    },
    postsFiltered() {
      return this.$store.getters.postsFiltered
    }
  },
  methods: {
    addPost() {
      if (this.newPost.trim().length == 0) {
        return
      }
      this.$store.dispatch('addPost', {
        id: this.idForPost,
        title: this.newPost,
      })
      this.newPos = ''
      this.idForPost++
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
