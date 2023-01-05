<template>
  <div id="CubeView">
    <div v-for="(rowItem, rowIndex) in 30" :key="`rowIndex${rowIndex}`" class="row">
      <div v-for="(cubeItem, cubeIndex) in 30" :key="`cubeIndex${cubeIndex}`" class="cube">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#CubeView {
  height: 100vh;
  overflow: hidden;
  & .row {
    position: relative;
    display: inline-flex;
    margin-top: -45px;
    & .cube {
      position: relative;
      width: 150px;
      height: 150px;
      & span {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-color: #fff;
        transition: 2s;
        animation: animate 4s linear infinite;
      }
      & span:nth-child(1) {
        clip-path: polygon(50% 0%, 100% 25%, 50% 50%, 0% 25%);
      }
      & span:nth-child(2) {
        clip-path: polygon(0% 75%, 50% 100%, 50% 50%, 0% 25%);
      }
      & span:nth-child(2):before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.01);
        clip-path: polygon(0% 75%, 50% 100%, 50% 50%, 0% 25%);
      }
      & span:nth-child(3) {
        clip-path: polygon(100% 75%, 50% 100%, 50% 50%, 100% 25%);
      }
      & span:nth-child(3):before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.05);
        clip-path: polygon(100% 75%, 50% 100%, 50% 50%, 100% 25%);
      }
    }
    & .cube:hover span {
      background-color: #03a9f4;
      transition: 0s;
    }
  }
  & .row:nth-child(even) {
    margin-left: -75px;
  }
}

@keyframes animate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
</style>
