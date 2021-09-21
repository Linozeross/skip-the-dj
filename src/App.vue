<template>
  <div id="app">
    <div class="box">
      <h1 class="title is-2">Current DJ</h1>
        <div class="columns is-vcentered">
          <div class="column">
          <div class="image is-256x256">
            <img src="https://bulma.io/images/placeholders/256x256.png" />
            <h1 class="title is-3 pt-2">Barleton</h1>
          </div>
          </div>
            <div class="column">
              <h1 class="title giantcolor">5:00</h1>
            </div>
            <div class="column" >
              <button class="button is-success is-large" style="width: 100%; height: 100%"> + 0:30 </button>
            </div>
          

          <br />
          <h1>{{ timer }}</h1>
          <br />
        </div>
    </div>
  </div>
</template>

<script>
import "@/myStyle.sass";
import "font-awesome/css/font-awesome.min.css";

export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {},
  computed: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
