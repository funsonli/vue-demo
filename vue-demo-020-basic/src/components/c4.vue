<template>
  <div>
    <h5>4.向父组件传递数据，需要使用$on监听 $emit触发事件</h5>
    <button @click="submit1">向父组件传递数据</button>
  </div>
</template>
<script>
export default {
  name: 'c4',
  props: {
    value: String,
  },
  methods: {
    submit1 () {
      this.$emit('on-change', this.value + " welcome");
    }
  },
};
</script>
