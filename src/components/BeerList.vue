<template>
  <ol>
    <li v-for="beer in beers">
      <a href="#">{{ beer.name }}</a>
    </li>
  </ol>
</template>

<script lang="ts">
import * as Vue from "vue";
import Component from "vue-class-component";
import { Inject } from "@scandltd/vue-injector";
import { Http, URL } from "../services/http";
import { map } from "rxjs/operators";

@Component({
  props: {
    msg: String
  }
})
export default class BeerList extends Vue {
  @Inject httpClient: Http;

  beers: Array<{ name }> = [];

  created() {
    this.httpClient
      .get(URL)
      .pipe(map(data => data))
      .subscribe(data => (this.beers = data));
  }
}
</script>

<style scoped>
ol {
  counter-reset: li;
  list-style: none;
  font: 14px "Trebuchet MS", "Lucida Sans";
  padding: 0;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}

ol li > a {
  position: relative;
  cursor: pointer;
  display: block;
  padding: 0.4em 0.4em 0.4em 0.8em;
  margin: 0.5em 0 0.5em 2.5em;
  background: #D3D4DA;
  color: #444;
  text-decoration: none;
  transition: all 0.3s ease-out;
}

ol a:before {
  content: counter(li);
  counter-increment: li;
  position: absolute;
  left: -2.5em;
  top: 50%;
  margin-top: -1em;
  background: #9097A2;
  height: 2em;
  width: 2em;
  line-height: 2em;
  text-align: center;
  font-weight: bold;
}

ol a:after {
  position: absolute;
  content: "";
  border: 0.5em solid transparent;
  left: -1em;
  top: 50%;
  margin-top: -0.5em;
  transition: all 0.3s ease-out;
}

ol a:hover:after {
  left: -0.5em;
  border-left-color: #9097A2;
}

ol a:hover {
  background: #DCDDE1;
}
</style>
