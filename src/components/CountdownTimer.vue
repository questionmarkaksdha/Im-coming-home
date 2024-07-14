<template>
  <div class="container">
    <h1>...</h1>
    <div id="countdown">
      <div class="time"><span>{{ days }}</span><small>Days</small></div>
      <div class="time"><span>{{ hours }}</span><small>Hours</small></div>
      <div class="time"><span>{{ minutes }}</span><small>Minutes</small></div>
      <div class="time"><span>{{ seconds }}</span><small>Seconds</small></div>
      <div class="time"><span>{{ milliseconds }}</span><small>Milliseconds</small></div>
    </div>
    <audio id="t1-sound" src="/tick.mp3"></audio>
    <audio id="t2-sound" src="/minute.mp3"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "[Name]",
      endDate: new Date("September 3, 2026 00:00:00").getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      previousSeconds: 0,
      previousMinutes: 0,
    };
  },
  mounted() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 10);
  },
  methods: {
    updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = this.endDate - now;

      this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      this.hours = ("0" + Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
      this.minutes = ("0" + Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
      this.seconds = ("0" + Math.floor((timeLeft % (1000 * 60)) / 1000)).slice(-2);
      this.milliseconds = ("0" + Math.floor((timeLeft % 1000) / 10)).slice(-2);

      // Play tick sound every second
      if (this.seconds !== this.previousSeconds) {
        document.getElementById('t1-sound').play();
        this.previousSeconds = this.seconds;
      }

      // Play minute sound every minute
      if (this.minutes !== this.previousMinutes) {
        document.getElementById('t2-sound').play();
        this.previousMinutes = this.minutes;
      }
    },
  },
};
</script>

<style scoped>
@import '~normalize.css';

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

.container {
  text-align: center;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

#countdown {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.time {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  min-width: 100px;
}

.time span {
  display: block;
  font-size: 2.5em;
  font-weight: bold;
}

.time small {
  display: block;
  font-size: 0.75em;
  color: #b0bec5;
}

.message {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>