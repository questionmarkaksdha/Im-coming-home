<template>
  <div id="app">
    <div id="particles-js"></div>
    <CountdownTimer />
  </div>
</template>

<script>
import CountdownTimer from './components/CountdownTimer.vue';

export default {
  name: 'App',
  components: {
    CountdownTimer,
  },
};
</script>

<style>
body {
  background-color: black;
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #61dafb;
  margin: 0;
  overflow: hidden;
}

#app {
  text-align: center;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.container {
  position: relative;
  z-index: 1;
}
</style>