<template>
  <div class="signle-post">
  </div>
</template>

<script>
export default {
  name: 'single-post',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
        'id': this.post.id,
        'title': this.post.title,
        'mtitle': this.post.mtitle,
        'image': this.post.image,
        'description': this.post.description,
        'body': this.post.body,
        'completed': this.post.completed,
      'editing': this.post.editing,
      'beforeEditCache': '',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
