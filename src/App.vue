<template>
  <div class="app">
    <h1 class="app__title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: 'Hello World'
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

.app {
  &__title {
    font-size: 25px;
    font-weight: 700;
  }
}
</style>
