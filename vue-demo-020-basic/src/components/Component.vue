<template>
  <div>
    <c1></c1>
    <c2></c2>
    <c3 v-bind:title="title"></c3>
    <c4 v-model="nickname" v-on:on-change="changeNickName"></c4> {{ nickname }}
  </div>
</template>

<script>
import c2 from "./c2.vue";
import c3 from "./c3.vue";
import c4 from "./c4.vue";
export default {
  data() {
    return {
      title: "funson",
      nickname: "funson" 
    }
  },
  components: {
    c2,
    c3,
    c4
  },
  methods: {
    changeNickName (v) {
      this.nickname = v
    }
  }
};
</script>