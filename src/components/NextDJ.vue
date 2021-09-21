<template>
  <div class="box">
    <div class="columns is-vcentered">
      <div class="column is-one-third">
        <div class="image is-rounded">
          <img src="https://bulma.io/images/placeholders/256x256.png" />
        </div>
      </div>
      <div class="column is-one-third">
        <h1 class="title is-1 pt-2">{{ dj.djName }}</h1>
      </div>
      <div class="column is-one-third">
        <div class="block djQuote">"{{ dj.djQuote }}"</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NextDJElement",
  props: ["dj"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.djQuote {
  font-family: "Grechen Fuemen", cursive;
  font-size: 30px;
  font-weight: thin;
}
</style>
