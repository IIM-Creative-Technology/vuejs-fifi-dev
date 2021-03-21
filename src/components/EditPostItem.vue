<template>
  <div class="edit-post-item">
      <div class="card">
      <div class="card-header">
        <!-- Image of the Post -->
        <img :src="image" alt="ordinateur ">
      </div>
      <div class="card-body">
        <!-- Title of the post -->
        <h1 v-if="!editing" @dblclick="EditPost" :class="{ completed : completed }">{{ title }}</h1>
        <!-- content of the post -->
        <p class="content">{{ description }}</p>
        <hr>
        <!-- author details-->
        <div class="author">
          <!-- date -->
          <p class="date">Posté le 9 mars 2021</p>
          <!-- author id -->
          <p class="creator">Par Author</p>
        </div>
      </div>
      <!-- Buttons -->
      <div class="cardButtons">
        <!-- Edit Button-->
        <div class="editButton">
          <button><a href="#">Editer</a></button>
        </div>
        <!-- delete Button-->
        <div class="deleteButton">
          <button @click="removePost(post.id)">Supprimer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit-post-item',
  props: {
    post: {
      type: Object,
      required: true,
    },
    checkAll: {
      type: Boolean,
      required: true,
    }
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
  watch: {
    checkAll() {
      this.completed = this.checkAll ? true : this.post.completed
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    removePost(id) {
      this.$store.dispatch('deletePost', id)
    },
    editPost() {
      this.beforeEditCache = this.title
      this.editing = true
    },
    doneEdit() {
      if (this.title.trim() == '') {
        this.title = this.beforeEditCache
      }
      this.editing = false
      this.$store.dispatch('updatePost', {
        'id': this.id,
        'title': this.title,
        'mtitle': this.mtitle,
        'image': this.image,
        'description': this.description,
        'body': this.body,
        'completed': this.completed,
      'editing': this.editing,
      })
    },
    cancelEdit() {
      this.title = this.beforeEditCache
      this.editing = false
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cardButtons{
  width: 100%;
  text-align: center;
}

.editButton{
  margin-top: 10%;
}

button{
  font-family: 'Nunito Sans', sans-serif;
  width: 200px;
  padding: 10px 50px;
  border-radius: 5px;
  color: white;
  border: none;
  margin: auto;
  margin-top: 10%;
  background-color: #101321;
  transition: background 0.4s ease;
}

button:hover{
  background: #7a1b38;
  cursor: pointer;
}

button a{
  color: white;
  text-decoration: none;
}

.author{
  display: flex;
}

.creator{
  margin-left: 10px;
}


@media screen and (max-width: 640px) {
  .editButton{
    margin: 0;
  }

  button{
    margin: auto;
    margin-top: 5%;
  }

}

</style>
