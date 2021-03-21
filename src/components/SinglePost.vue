<template>
  <div class="signle-post">
    <div class="container">
      <div class="postheader">
        <div class="postImg">
          <img src="assets/img/sample.jpg" alt="">
        </div>
        <h1>Le Titre</h1>
      </div>
      <div class="postBody">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus ex non porttitor luctus. Ut interdum nec nibh sit amet fringilla. Donec justo orci, tincidunt vulputate tempor ac, ullamcorper eu orci. Suspendisse velit odio, cursus ac erat at, placerat convallis ipsum. Aenean a sollicitudin dolor. Praesent vel metus eget magna ornare interdum at eget diam. Praesent arcu metus, venenatis id euismod nec, porttitor in mauris. Maecenas et urna non nisi vestibulum ultrices. Morbi mi neque, faucibus at suscipit rhoncus, ullamcorper vitae sapien. Quisque sagittis mauris nec lacus efficitur, vitae pulvinar neque molestie. Proin vulputate hendrerit purus. Quisque fermentum leo nunc.

          Maecenas ac mollis sapien. Ut ullamcorper diam pretium lorem maximus, vel congue arcu sagittis. Aenean vitae nibh ultricies, aliquet ante vel, fermentum mi. Etiam elementum mi elit, ut iaculis mauris malesuada at. Morbi eget ligula ligula. Sed convallis purus in massa sodales facilisis sed et enim. Donec hendrerit eros ac ante vestibulum aliquet. Morbi ac pellentesque est, vitae placerat nunc. Aliquam eget pellentesque eros, ac sodales arcu. Sed vel finibus lectus. <br> <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus ex non porttitor luctus. Ut interdum nec nibh sit amet fringilla. Donec justo orci, tincidunt vulputate tempor ac, ullamcorper eu orci. Suspendisse velit odio, cursus ac erat at, placerat convallis ipsum. Aenean a sollicitudin dolor. Praesent vel metus eget magna ornare interdum at eget diam. Praesent arcu metus, venenatis id euismod nec, porttitor in mauris. Maecenas et urna non nisi vestibulum ultrices. Morbi mi neque, faucibus at suscipit rhoncus, ullamcorper vitae sapien. Quisque sagittis mauris nec lacus efficitur, vitae pulvinar neque molestie. Proin vulputate hendrerit purus. Quisque fermentum leo nunc.

          Maecenas ac mollis sapien. Ut ullamcorper diam pretium lorem maximus, vel congue arcu sagittis. Aenean vitae nibh ultricies, aliquet ante vel, fermentum mi. Etiam elementum mi elit, ut iaculis mauris malesuada at. Morbi eget ligula ligula. Sed convallis purus in massa sodales facilisis sed et enim. Donec hendrerit eros ac ante vestibulum aliquet. Morbi ac pellentesque est, vitae placerat nunc. Aliquam eget pellentesque eros, ac sodales arcu. Sed vel finibus lectus.
        </p>
      </div>
      <div class="postFooter">
        <div class="date">
          <p>Posté le 9 mars 2021</p>
        </div>
        <div class="author">
          <div class="authorImg">
            <img src="assets/img/sample.jpg" alt="image de l'aut">
          </div>
          <div class="authorName">
            <p>Author Name</p>
          </div>
        </div>
      </div>
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
.container{
  margin: 2vh 10vw;
  border: 5px solid yellow;
  color: white;
  background-color: #101321;
  padding: 2%;
}

.postImg{
  width: 60vw;
  margin: 2vh auto;
}
h1{
  text-align: center;
  margin: 5vh auto;
}

.authorImg{
  width: 80px;
}

.authorImg img{
  border-radius: 50%;
}

.postFooter{
  margin-top: 5vh;
  display: flex;
  justify-content: space-between;
}

.author{
  width: 15vw;
  display: flex;
  justify-content: space-around;
}



</style>
