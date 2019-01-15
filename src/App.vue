<template>
  <div class="app">
    <input-vue :initial-value="title" />
  </div>
</template>

<script>
import InputVue from './components/inputVue/inputVue';

export default {
  data() {
    return {
      title: 'Hello World'
    }
  },
  components: {
    InputVue
  }
};
</script>