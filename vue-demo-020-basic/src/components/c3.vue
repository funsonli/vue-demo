<template>
  <div>
    <h5>3. 局部组件，从父组件传入属性 {{ title }}</h5>
  </div>
</template>
<script>
export default {
  name: 'c3',
  props: {
    title: {
      type: String,
      required:true
    }

  }
}
</script>
