<template>
  <div class="container">
    <h1>Countdown to {{ name }}'s 18th Birthday</h1>
    <div id="countdown">
      <div class="time" title="Days">
        <span>{{ days }}</span><small>Days</small>
      </div>
      <div class="time" title="Hours">
        <span>{{ hours }}</span><small>Hours</small>
      </div>
      <div class="time" title="Minutes">
        <span>{{ minutes }}</span><small>Minutes</small>
      </div>
      <div class="time" title="Seconds">
        <span>{{ seconds }}</span><small>Seconds</small>
      </div>
      <div class="time" title="Milliseconds">
        <span>{{ milliseconds }}</span><small>Milliseconds</small>
      </div>
    </div>
    <p class="message">{{ name }} is turning 18 and coming back to Pennsylvania on September 3, 2026!</p>
    <audio id="t1-sound">
      <source src="/tick.mp3" type="audio/mpeg">
      <source src="/tick.ogg" type="audio/ogg">
      Your browser does not support the audio element.
    </audio>
    <audio id="t2-sound">
      <source src="/minute.mp3" type="audio/mpeg">
      <source src="/minute.ogg" type="audio/ogg">
      Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Name",
      endDate: new Date("September 3, 2026 00:00:00").getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      previousSeconds: -1, // Initialize to an impossible value
      previousMinutes: -1, // Initialize to an impossible value
    }
  },
  mounted() {
    this.updateCountdown()
    this.setVolume()
    setInterval(this.updateCountdown, 10)
  },
  methods: {
    setVolume() {
      const t1Sound = document.getElementById('t1-sound')
      const t2Sound = document.getElementById('t2-sound')
      t1Sound.volume = 0.5 // Adjust volume for t1-sound (0.0 to 1.0)
      t2Sound.volume = 0.5 // Adjust volume for t2-sound (0.0 to 1.0)
    },
    updateCountdown() {
      const now = new Date().getTime()
      const timeLeft = this.endDate - now

      this.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
      this.hours = ("0" + Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2)
      this.minutes = ("0" + Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))).slice(-2)
      this.seconds = ("0" + Math.floor((timeLeft % (1000 * 60)) / 1000)).slice(-2)
      this.milliseconds = ("0" + Math.floor((timeLeft % 1000) / 10)).slice(-2)

      // Play tick sound every second
      if (this.seconds !== this.previousSeconds) {
        document.getElementById('t1-sound').play().catch(() => {})
        this.previousSeconds = this.seconds
      }

      // Play minute sound every minute
      if (this.minutes !== this.previousMinutes) {
        document.getElementById('t2-sound').play().catch(() => {})
        this.previousMinutes = this.minutes
      }
    }
  }
}
</script>

<style scoped>
@import '~normalize.css'

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

.container {
  text-align: center;
  position: relative;
  z-index: 1;
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
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1));
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  transition: transform 0.2s, box-shadow 0.2s;
}

.time span {
  font-size: 3em;
  display: block;
}

.time small {
  font-size: 1em;
  display: block;
}

.time:hover {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
}

.time::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.4), transparent);
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>