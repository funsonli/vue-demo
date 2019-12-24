<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="tapPost">Post</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    axios
      .get('https://mini.mingpianhai.com')
      .then(res => {
        this.msg = res.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    tapPost: function () {
      axios
        .post('https://mini.mingpianhai.com', {
          'name': 'funson',
          'age': 20
        })
        .then(res => {
          this.msg = res.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
