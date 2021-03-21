<template>
  <div class="post-list">
    <post-card v-for="post in postsFiltered" :key="post.id" :post="post" :checkAll="!anyRemaining"></post-card>
      <div class="card">
      <div class="card-header">
        <img src="@/assets/img/sample.jpg" alt="ordinateur ">
      </div>
      <div class="card-body">
        <p class="date">Posté le 9 mars 2021</p>
        <a href="#"><h1>The title</h1></a>
        <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio hic provident odio natus aperiam iste ipsa ad quae, aspernatur magni impedit voluptatibus omnis molestiae praesentium temporibus nulla corporis modi tenetur!</p>
        <hr>
        <p class="author">By Author</p>
        <a href="#">Consulter <i class="fas fa-long-arrow-alt-right"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from './PostCard.vue'
export default {
  name: 'edit-post-list',
  components: {
    PostCard
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
.date{
  text-align: right;
}

.card-header{
    width: 500px;
}

</style>
