<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- <div class="card">
      <div class="heart"></div>
    </div> -->
    <SimpsonsHomer />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import SimpsonsHomer from '@/components/SimpsonsHomer.vue'

@Options({
  components: {
    HelloWorld,
    SimpsonsHomer
  }
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
