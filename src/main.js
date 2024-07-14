import Vue from 'vue';
import App from './App.vue';
import 'normalize.css';
import 'src/particles.min.js'; // Import the minified particles.js file
import { initParticles } from 'src/particles.js'; // Import your custom particles configuration

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  mounted() {
    this.$nextTick(() => {
      initParticles();
    });
  }
}).$mount('#app');