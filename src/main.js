import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';
import 'particles.js/particles'; // Import particles.js from node modules
import { initParticles } from './particles'; // Import your custom particles configuration

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  mounted() {
    this.$nextTick(() => {
      initParticles();
    });
  }
}).$mount('#app');