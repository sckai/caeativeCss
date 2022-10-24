<template>
  <div id="AdidasLogo">
    <div class="shape s1"></div>
    <div class="shape s2"></div>
    <div class="shape s3"></div>
  </div>
</template>

<style lang="scss" scoped>
#AdidasLogo {
  width: 206px;
  height: 120px;
  background-color: white;
  position: relative;
  overflow: hidden;

  & .shape {
    width: 46px;
    height: 150px;
    background-color: #111;
    position: absolute;
    transform: rotate(-31deg);
  }

  & .s1 {
    top: 86px;
    left: 36px;
    // background-color: blue;
  }

  & .s2 {
    top: 45px;
    left: 82px;
    // background-color: yellow;
  }

  & .s3 {
    top: 4px;
    left: 129px;
    // background-color: yellow;
  }
}
</style>
