<template>
  <main>
    <video muted autoplay loop>
      <source src="../public/video/sleeping-zenitsu-attack-demon-slayer-moewalls-com.mp4" type="video/mp4" />
    </video>
    <div class="timerContainer">
      <div class="timerHeader">
        <h1>NeonChrono</h1>
        <Quote />
      </div>
      <div class="counter-container">
        <MadCounter />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MadCounter from './components/MadCounter/MadCounter.vue';
import Quote from './components/Quotes/Quote.vue';

export default defineComponent({
  name: "App",
  components: {
    MadCounter,
    Quote
  },
})
</script>

<style scoped>
main {
  height: 100vh;
  position: relative;
  width: 100vw;
}

main .counter-container {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

main .timerContainer {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

main .timerContainer h1 {
  color: var(--yellow-color);
  font-family: "DemonSlayer";
  font-size: 40px;
  text-transform: uppercase;
}

main .timerHeader h1 {
  text-align: center;
  width: 100%;
}

main video {
  opacity: 0.2;
  position: absolute;
  width: 100%;
  z-index: -1;
}
</style>
