<template>
  <div id="FigmaLogo">
    <div class="part part-1"></div>
    <div class="part part-2"></div>
    <div class="part part-3"></div>
    <div class="part part-4"></div>
    <div class="part part-5"></div>
  </div>
</template>

<style lang="scss" scoped>
#FigmaLogo {
  width: 180px;
  height: 270px;
  display: flex;
  flex-wrap: wrap;
  & .part {
    width: 90px;
    height: 90px;
  }
  & .part-1 {
    background-color: #EE4E2A;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
  & .part-2 {
    background-color: #FB7266;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  & .part-3 {
    background-color: #A061FA;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }
  & .part-4 {
    background-color: #2EBDFA;
    border-radius: 50%;
  }
  & .part-5 {
    background-color: #00CE86;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
}
</style>
