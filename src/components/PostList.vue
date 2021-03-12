<template>
  <div class="post-list">
      <div class="card">
      <div class="card-header">
        <!-- Image of the Post -->
        <img src="@/assets/img/sample.jpg" alt="ordinateur ">
      </div>
      <div class="card-body">
        <!-- Title of the post -->
        <h1>The title</h1>
        <!-- content of the post -->
        <p class="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio hic provident odio natus aperiam iste ipsa ad quae, aspernatur magni impedit voluptatibus omnis molestiae praesentium temporibus nulla corporis modi tenetur!</p>
        <hr>
        <!-- author details-->
        <div class="author">
          <!-- date -->
          <p class="date">Posté le 9 mars 2021</p>
          <!-- author id -->
          <p class="creator">Par Author</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    //
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.author{
  display: flex;
}

.creator{
  margin-left: 10px;
}

</style>
