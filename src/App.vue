<template>
  <div id="app">
    <div class="box">
      <h1 class="title is-2">Skip-The-DJ!</h1>
      <h1 class="title is-1 pt-2">Barleton</h1>
      <div class="columns is-vcentered">
        <div class="column">
          <div class="image is-256x256">
            <img src="https://bulma.io/images/placeholders/256x256.png" />
          </div>
        </div>
        <div class="column">
          <circle-timer :timeLimit="timerSeconds"></circle-timer>
        </div>
        <div class="column">
          <button
            :disabled="chargeClap"
            @click="timerProcess"
            class="button is-primary is-large"
            style="width: 100%; height: 100%"
          >
            + 0:30
          </button>
        </div>

        <br />
        <h1>{{ timer }}</h1>
        <br />
      </div>
    </div>
    <div v-for="dj in nextDJs" :key="dj.djName">
      <NextDJ :dj="dj"></NextDJ>
    </div>
  </div>
</template>

<script>
import "@/myStyle.sass";
import "../css/mystyles.css";
import "font-awesome/css/font-awesome.min.css";
import CircleTimer from "./components/CircleTimer.vue";
import NextDJ from "./components/NextDJ.vue";

export default {
  components: { CircleTimer, NextDJ },
  name: "App",
  data() {
    return {
      timerSeconds: 300,
      buttonTimeout: 3000,
      chargeClap: false,
      nextDJs: [
        {
          djName: "SuperDJ",
          djImg: "",
          djQuote: "Ich mach super geile Mukke🤩",
        },
      ],
    };
  },
  mounted() {},
  computed: {},
  methods: {
    timerProcess() {
      this.timerSeconds += 30;
      this.chargeClap = true;
      setTimeout(() => (this.chargeClap = false), this.buttonTimeout);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");
#app {
  font-family: "DM Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

.giantcolor {
  font-size: 120px;
  color: coral;
}
</style>
