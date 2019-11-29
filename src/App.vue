<template>
  <div id="app">
    <BeerList/>
  </div>
</template>

<script lang="ts">
import BeerList from "./components/BeerList.vue";

import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
    BeerList
  }
})
class App extends Vue {}

export default App;
</script>
