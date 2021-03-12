<template>
  <div class="edit-post-list">
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
      <!-- Buttons -->
      <div class="cardButtons">
        <!-- Edit Button-->
        <div class="editButton">
          <button><a href="#">Editer</a></button>
        </div>
        <!-- delete Button-->
        <div class="deleteButton">
          <button>Supprimer</button>
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
