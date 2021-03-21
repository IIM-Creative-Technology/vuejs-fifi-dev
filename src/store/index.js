import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filter: 'all',
    posts: [
      {
        id: 1,
        title: "post1",
        mtitle: "post1",
        image: "https://images.unsplash.com/photo-1611095777904-271a798ed635?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu quam diam. Etiam ut convallis urna. Nunc ornare vitae leo eget dignissim. Nam varius mauris vel tortor sodales pretium. Mauris auctor luctus eros, non malesuada orci faucibus nec. Nulla finibus ornare iaculis. Proin ultricies mi ac purus tempor tempus. Phasellus consequat scelerisque tellus, a facilisis nisl rutrum quis. Curabitur pulvinar neque purus, vitae molestie justo mollis vel. Sed nec aliquam eros. Praesent gravida sed metus vitae facilisis. Cras tristique placerat consectetur",
      },
      {
        id: 2,
        title: "post1",
        mtitle: "post1",
        image: "https://images.unsplash.com/photo-1611095970111-fc87b5315dc3?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMjh8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu quam diam. Etiam ut convallis urna. Nunc ornare vitae leo eget dignissim. Nam varius mauris vel tortor sodales pretium. Mauris auctor luctus eros, non malesuada orci faucibus nec. Nulla finibus ornare iaculis. Proin ultricies mi ac purus tempor tempus. Phasellus consequat scelerisque tellus, a facilisis nisl rutrum quis. Curabitur pulvinar neque purus, vitae molestie justo mollis vel. Sed nec aliquam eros. Praesent gravida sed metus vitae facilisis. Cras tristique placerat consectetur",
      },
      {
        id: 3,
        title: "sollicitudin velit",
        mtitle: "sollicitudin-velit",
        image: "https://images.unsplash.com/photo-1611095777904-271a798ed635?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Fusce eu sollicitudin velit. Etiam blandit odio a tincidunt consequat. Aenean malesuada lobortis felis nec imperdiet.",
        body: "Fusce eu sollicitudin velit. Etiam blandit odio a tincidunt consequat. Aenean malesuada lobortis felis nec imperdiet. Etiam id convallis turpis, ut fermentum orci. Sed ultricies lobortis ligula et blandit. Aliquam a mi vitae nisi molestie pellentesque sit amet sagittis velit. Aliquam sed ornare odio. Nulla ut luctus leo, eu dictum nibh. Aliquam sit amet egestas metus. Morbi at est eget mi dictum auctor.",
      },
      {
        id: 4,
        title: "tristique hendrerit",
        mtitle: "tristique-hendrerit",
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Suspendisse porttitor tristique hendrerit. Aenean at metus vehicula, pulvinar libero ut, sodales purus.",
        body: "Suspendisse porttitor tristique hendrerit. Aenean at metus vehicula, pulvinar libero ut, sodales purus. Cras fringilla facilisis leo, et dignissim lacus ultricies quis. Pellentesque blandit vestibulum felis id condimentum. Suspendisse ac elit sit amet mauris consectetur pellentesque. Sed tincidunt nec eros eget cursus. Praesent lorem metus, vehicula id laoreet non, varius vel sapien. Ut ultricies tempor ligula sed venenatis. Sed aliquam placerat erat eu condimentum. Mauris pretium mi sed turpis interdum, sed faucibus massa molestie. Ut blandit metus sit amet diam hendrerit, vitae suscipit elit blandit. Etiam cursus diam neque, sed fringilla ipsum fermentum nec. In vel consequat ex, varius aliquet neque. Aliquam sodales, ex quis bibendum euismod, odio arcu rhoncus dui, eget fringilla velit ligula vel magna. Etiam a cursus libero.",
      },
      {
        id: 5,
        title: "pharetra faucibus",
        mtitle: "pharetra-faucibus",
        image: "https://images.unsplash.com/photo-1611095564350-2cbe940a8d99?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Proin non est et tellus pharetra faucibus. Proin eget enim mi. Duis porttitor fermentum consequat.",
        body: "Proin non est et tellus pharetra faucibus. Proin eget enim mi. Duis porttitor fermentum consequat. Proin vel nisi at elit eleifend molestie. Pellentesque placerat aliquet vehicula. In pharetra nibh in interdum venenatis. Aenean placerat eu libero sit amet bibendum. Donec scelerisque neque quis mauris dignissim, vitae venenatis turpis bibendum. Nunc vulputate facilisis lectus. Vestibulum luctus eleifend purus sed dapibus.",
      },
      {
        id: 6,
        title: "metus sem",
        mtitle: "metus-sem",
        image: "https://images.unsplash.com/photo-1616161560417-66d4db5892ec?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Morbi pretium metus sem, in vehicula felis consectetur ut. Proin egestas diam nec ex pretium placerat.",
        body: "Morbi pretium metus sem, in vehicula felis consectetur ut. Proin egestas diam nec ex pretium placerat. Phasellus a ornare lectus, porttitor tincidunt diam. Pellentesque at purus nibh. Nullam ornare neque nec lacus elementum, et bibendum mi ultricies. Curabitur efficitur molestie lectus et gravida. Aenean elit tellus, laoreet id felis non, porttitor condimentum diam. Sed vel eros eget velit laoreet finibus. Nam dui lectus, elementum a viverra elementum, vestibulum et odio. Nullam ac imperdiet tortor.",
      },
      {
        id: 7,
        title: "pellentesque enim mauris",
        mtitle: "pellentesque-enim-mauris",
        image: "https://images.unsplash.com/photo-1616149562385-1d84e79478bb?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Etiam pellentesque enim mauris, ut accumsan eros condimentum id. Maecenas a enim accumsan, aliquam augue ut, venenatis quam.",
        body: "Etiam pellentesque enim mauris, ut accumsan eros condimentum id. Maecenas a enim accumsan, aliquam augue ut, venenatis quam. Cras ut mi venenatis, auctor tortor vitae, sagittis purus. Cras quis sagittis urna. Quisque vestibulum felis id tellus semper lacinia. Sed rhoncus nisi et nibh varius, tempor auctor arcu finibus. Nulla a erat id felis pharetra mattis. Nam sodales mauris diam, et pellentesque ante pellentesque ac. Aenean vitae tortor suscipit, sagittis leo id, elementum turpis. Nulla et pretium purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ultrices tortor ligula, quis congue felis molestie quis. Donec non ex erat.",
      },
      {
        id: 8,
        title: "pharetra pharetra",
        mtitle: "pharetra-pharetra",
        image: "https://images.unsplash.com/photo-1616161245573-e16599aa0fec?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Donec fermentum pharetra pharetra. Donec pharetra facilisis lectus non ullamcorper. Quisque ac convallis eros.",
        body: "Donec fermentum pharetra pharetra. Donec pharetra facilisis lectus non ullamcorper. Quisque ac convallis eros. Sed semper vulputate ex sed viverra. Nam leo lectus, congue vitae lacus ac, aliquet vehicula tellus. Nullam sed mollis mauris, ut dapibus velit. Integer ac purus at nibh porttitor efficitur. Integer tincidunt, sem a viverra porttitor, elit ipsum condimentum magna, ut feugiat enim metus id lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam ullamcorper velit convallis mauris rutrum fringilla vitae ut ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec felis mauris, interdum sed efficitur non, finibus ut est. Praesent neque nisi, ullamcorper ut tellus eget, consectetur lacinia leo. Curabitur tincidunt odio eu nibh tristique rutrum.",
      },
      {
        id: 9,
        title: "bibendum placerat",
        mtitle: "bibendum-placerat",
        image: "https://images.unsplash.com/photo-1616231589912-4761c2543914?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Etiam tristique, lacus at bibendum placerat, ex lectus tempor ligula, id rutrum nibh eros et metus. Etiam hendrerit rhoncus sapien, non pulvinar mi iaculis a..",
        body: "Etiam tristique, lacus at bibendum placerat, ex lectus tempor ligula, id rutrum nibh eros et metus. Etiam hendrerit rhoncus sapien, non pulvinar mi iaculis a. Aliquam mollis dui eget felis consequat pharetra. Praesent mollis, elit eu interdum rhoncus, dolor sapien tristique lorem, et efficitur augue risus eget lectus. Mauris diam arcu, rutrum ut suscipit vel, laoreet eu massa. Phasellus pharetra vestibulum nisi, eu mollis ligula egestas a. Sed lobortis justo sit amet diam laoreet, nec consectetur lorem auctor. Sed condimentum maximus neque, vitae maximus justo. Maecenas a nibh faucibus, placerat nisi ut, ullamcorper elit. Sed venenatis fermentum augue vitae sollicitudin. Donec sodales massa vitae ex congue hendrerit. Maecenas egestas rhoncus dui, nec porttitor neque sollicitudin nec. Nullam pharetra lorem non ante eleifend, quis laoreet diam dictum. Nulla malesuada viverra ante in fermentum.",
      },
      {
        id: 10,
        title: "dictum hendrerit",
        mtitle: "dictum-hendrerit",
        image: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Sed tincidunt dictum hendrerit. Nam nec arcu eget augue porta lobortis. Cras ligula urna, varius id augue vitae, lacinia lacinia sem.",
        body: "Sed tincidunt dictum hendrerit. Nam nec arcu eget augue porta lobortis. Cras ligula urna, varius id augue vitae, lacinia lacinia sem. Mauris mattis mollis eros, et fringilla libero viverra vitae. Ut et dolor tristique, posuere neque vel, fermentum ligula. Maecenas in feugiat metus. Morbi tincidunt nunc nec mauris auctor scelerisque.",
      },
    ],
  },
  getters: {
    remaining(state) {
      return state.posts.filter(post => !post.completed).length
    },
    anyRemaining(state, getters) {
      return getters.remaining != 0
    },
    postsFiltered(state) {
      if (state.filter == 'all') {
        return state.posts
      } else if (state.filter == 'active') {
        return state.posts.filter(post => !post.completed)
      } else if (state.filter == 'completed') {
        return state.posts.filter(post => post.completed)
      }
      return state.posts
    },
    showClearCompletedButton(state) {
      return state.posts.filter(post => post.completed).length > 0
    }
  },
  mutations: {
    addPost(state, post) {
      state.posts.push({
        id: post.id,
        title: post.title,
        mtitle: post.mtitle,
        image: post.image,
        description : post.description,
        body: post.body,
      })
    },
    updatePost(state, post) {
      const index = state.posts.findIndex(item => item.id == post.id)
      state.posts.splice(index, 1, {
        'id': post.id,
        'title': post.title,
        'mtitle': post.mtitle,
        'image': post.image,
        'description': post.description,
        'body': post.body,
      })
    },
    deletePost(state, id) {
      const index = state.posts.findIndex(item => item.id == id)
      state.posts.splice(index, 1)
    },
    checkAll(state, checked) {
      state.posts.forEach(post => (post.completed = checked))
    },
    updateFilter(state, filter) {
      state.filter = filter
    },
    clearCompleted(state) {
      state.posts = state.posts.filter(post => !post.completed)
    }
  },
  actions: {
    addPost(context, post) {
      setTimeout(() => {
        context.commit('addPost', post)
      }, 100)
    },
    updatePost(context, post) {
      setTimeout(() => {
        context.commit('updatePost', post)
      }, 100)
    },
    deletePost(context, id) {
      setTimeout(() => {
        context.commit('deletePost', id)
      }, 100)
    },
    checkAll(context, checked) {
      setTimeout(() => {
        context.commit('checkAll', checked)
      }, 100)
    },
    updateFilter(context, filter) {
      setTimeout(() => {
        context.commit('updateFilter', filter)
      }, 100)
    },
    clearCompleted(context) {
      setTimeout(() => {
        context.commit('clearCompleted')
      }, 100)
    }
  }
});
