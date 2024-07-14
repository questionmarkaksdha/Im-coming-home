<template>
  <div id="app">
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
}

#app {
  text-align: center;
}
</style>