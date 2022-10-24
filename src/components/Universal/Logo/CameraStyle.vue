<template>
<div id="CameraStyle">
  <div class="lens">
    <div class="innerLens">
      <div class="innerLensTwo"></div>
    </div>
  </div>
  <div class="flash"></div>
  <div class="button"></div>
</div>
</template>

<style lang="scss" scoped>
#CameraStyle {
  position: relative;
  width: 205px;
  height: 155px;
  background-color: #b6b6b6;
  border-radius: 15px;
  box-shadow: 0 10px 15px -13px black;
  display: flex;
  justify-content: center;
  align-items: center;
  & .lens {
    width: 125px;
    height: 125px;
    background-color: #f5f5f5;
    box-shadow: 0 8px 0 0 #c0c0c0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    & .innerLens {
      width: 105px;
      height: 105px;
      background-color: #00695c;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      & .innerLensTwo {
        border-top: 31px solid #00897b;
        border-right: 31px solid #4db6ac;
        border-bottom: 31px solid #80cbc4;
        border-left: 31px solid #26a69a;
        border-radius: 50%;
      }
    }
  }

  & .flash {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #f5f5f5;
    border-radius: 50%;
    right: 16px;
    top: 16px;
    box-shadow: 0 4px 0 0 #c0c0c0;
  }

  & .button {
    position: absolute;
    width: 30px;
    height: 5px;
    background-color: #009587;
    border-radius: 60px;
    left: 16px;
    top: -5px;
  }
}
</style>
