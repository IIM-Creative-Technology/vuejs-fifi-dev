<template>
  <div class="post-list">
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
export default {
    //
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.date{
  text-align: right;
}

.card-header{
    width: 600px;
}

</style>
