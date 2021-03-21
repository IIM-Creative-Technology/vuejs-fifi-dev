<template>
  <div class="edit-post">
      <h1>Modifier le post</h1>
    <div class="editPanel">
      <form action="">
        <div class="panel-header">
          <div class="seoData">
            <input type="text"
            class="input"
            placeholder="Titre.." id="title"/>
            <input type="text"
            class="input"
            placeholder="Meta Title..."/>
            <input type="text"
            class="input"
            placeholder="Meta Desciprion"/>
          </div>
          <div class="postImg">
            <div class="imgUpload"></div>
            <p>Ajouter une image</p>
          </div>
        </div>
        <div class="panel-body">
          <div class="postCore">
            <label for="subject">Corps du Post</label> <br>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
          </div>
        </div>
        <div class="panel-footer">
          <button type="button" name="button">Créer La page</button>
        </div>
      </form>
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
h1{
  text-align: center;
}

button:hover{
  background: #7a1b38;
  cursor: pointer;
}
.editPanel{
  width: 60vw;
  margin: auto;
  margin-top: 10vh;
}

.input, .pass, .login{
  width: 100%;
  height: 45px;
  border: 2px solid #101321;
  background: transparent;
  color: white;
  border-radius: 5px;
  font-size: 20px;
  font-weight: lighter;
  margin-bottom: 20px;
}

.input, .pass{
  cursor: text;
  font-family: 'Redressed', cursive;
 }

 .panel-header{
   display: flex;
   margin-bottom: 5vh;
 }

 .postImg{
   padding: 10px 50px;
   width: 200px;
   height: 200px;
   text-align: center;
 }

 .imgUpload{
   text-align: center;
   width: 150px;
   height: 150px;
   border: 2px solid #101321;
   margin: auto;
   border-radius: 50%;
 }

.panel-footer{
  text-align: right;
  width: 100%;
}

textarea {
  margin: 2vh auto;
  width: 100%;
  height: 250px;
  border: none;
  background-color: #101321;
}


</style>
