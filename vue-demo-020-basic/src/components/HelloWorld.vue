<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h5>对象：{{ site.name }}:  <a :href="site.url">{{ site.url }}</a> </h5>
    <h5>数组循环：</h5>
    <p v-for="student in students" :key="student.name"> {{ student.name }}:  {{ student.age}}</p>

    <h5>方法</h5>
    <button v-on:click="alertMe">alert me</button>

    <h5>条件判断</h5>
    <button v-on:click="showMe">Show Me</button>
    <div v-if="isShowMe">show Me</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World',
      // 对象
      site: {
        'name': 'vue demo',
        'url': 'https://github.com/funsonli/vue-demo'
      },
      // 数组循环
      students: [
        {
          'name': 'funson',
          'age': 30
        },
        {
          'name': 'zhonghua',
          'age': 31
        }
      ],
      isShowMe: false
    }
  },
  methods: {
    alertMe: function (event) {
      // `this` 在方法里指当前 Vue 实例
      alert('Hello ' + this.site.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
          alert(event.target.tagName)
      }
    },
    showMe: function () {
      if (this.isShowMe) {
        this.isShowMe = false
      } else {
        this.isShowMe = true
      }
    }
  }  
}
</script>
