<template>
  <div class="home">
    <ButtonSplittedEffect />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ButtonSplittedEffect from '@/components/Universal/Button/ButtonSplittedEffect.vue'

@Options({
  components: {
    ButtonSplittedEffect
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
