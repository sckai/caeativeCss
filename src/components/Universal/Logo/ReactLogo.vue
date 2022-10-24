<template>
  <div id="ReactLogo">
    <div class="line">
      <div class="circle"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#ReactLogo {
  position: relative;
  width: 300px;
  height: 300px;

  .line {
    position: relative;
    width: 300px;
    height: 100px;
    border: 3px solid #63DAFB;
    border-radius: 50%;
    & .circle {
      position: relative;
      width: 60px;
      height: 60px;
      top: 50%;
      left: 50%;
      background-color: #63DAFB;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
    &::before {
      content: '';
      position: absolute;
      top: 0px;
      left: 0px;
      width: 300px;
      height: 100px;
      border: 3px solid #63DAFB;
      border-radius: 50%;
      transform: rotate(60deg);
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
      height: 100px;
      border: 3px solid #63DAFB;
      border-radius: 50%;
      transform: rotate(-60deg);
    }
  }
}
</style>
