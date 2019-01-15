<template>
  <div class="input-vue">
    <input 
      type="text" 
      v-model="value"
    />
  </div>
</template>

<script>
export default {
  name: 'input-vue',
  props: {
    initialValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: this.initialValue
    }
  }
};
</script>