<template>
  <div id="GoogleLogo">
    <div class="top"></div>
    <div class="half"></div>
    <div class="line"></div>
  </div>
</template>

<style lang="scss" scoped>
#GoogleLogo {
  position: relative;
  width: 150px;
  height: 150px;

  & .top {
    position: absolute;
    width: 90px;
    height: 90px;
    border-top: 30px solid #E33E2B;
    border-right: 30px solid transparent;
    border-bottom: 30px solid #2BA14B;
    border-left: 30px solid #F1B500;
    border-radius: 50%;
  }

  & .half {
    width: 90px;
    height: 90px;
    position: absolute;
    border: 30px solid transparent;
    border-right: 30px solid #3A7CEC;
    transform: rotate(45deg);
    border-radius: 50%;
    z-index: -1;
  }

  & .line {
    width: 80px;
    height: 30px;
    background-color: #3A7CEC;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    border-bottom-right-radius: 50%;
  }
}
</style>
