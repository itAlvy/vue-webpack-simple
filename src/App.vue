<template>
  <div>
    {{msg}}
    <img :src="logo" alt />
    <input type="text" v-model="msg">
  </div>
</template>

<script>
import getData from "./utils";
import logo from "./assets/logo.jpg";
import { log } from 'util';

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js",
      logo,
    };
  },
  created() {
    this.fetchData();
    console.log(11111);
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.msg = data;
    },
  },
};
</script>

<style lang='scss' scoped>
img {
  width: 100px;
}
</style>