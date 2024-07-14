<template>
  <div class="container">
    <h1>When I turn 18</h1>
    <div id="countdown">
      <div class="time"><span>{{ days }}</span><small>Days</small></div>
      <div class="time"><span>{{ hours }}</span><small>Hours</small></div>
      <div class="time"><span>{{ minutes }}</span><small>Minutes</small></div>
      <div class="time"><span>{{ seconds }}</span><small>Seconds</small></div>
      <div class="time"><span>{{ milliseconds }}</span><small>Milliseconds</small></div>
    </div>
    <p class="message">Comin back to PA after that a little bit after...</p>
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
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.time span {
  font-size: 3em;
  display: block;
}

.time small {
  font-size: 1em;
  display: block;
}
</style>