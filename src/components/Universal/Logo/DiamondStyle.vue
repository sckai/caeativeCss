<template>
<div id="DiamondStyle">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</template>

<style lang="scss" scoped>
#DiamondStyle {
  position: relative;
  width: 200px;
  height: 200px;
  transform: rotate(45deg);
  & span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-right: 50px solid #414040;
    border-bottom: 50px solid #1d1d1d;
    border-left: 50px solid transparent;
  }
  & span:nth-child(2) {
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border-top: 50px solid #3f3f3f;
    border-right: 50px solid #414040;
    border-bottom: 50px solid #1d1d1d;
    border-left: 50px solid #0c0c0c;
  }
  & span:nth-child(3) {
    position: absolute;
    top: 50%;
    left: 0;
    width: 0;
    height: 0;
    border-top: 50px solid #3f3f3f;
    border-right: 50px solid #414040;
    border-bottom: 50px solid #1d1d1d;
    border-left: 50px solid #0c0c0c;
  }
  & span:nth-child(4) {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-top: 50px solid #3f3f3f;
    border-right: 50px solid #414040;
    border-bottom: 50px solid #1d1d1d;
    border-left: 50px solid #0c0c0c;
  }
}
</style>
