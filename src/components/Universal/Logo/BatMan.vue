<template>
<div id="BatMan">
  <div class="logo">
    <div class="o1"></div>
    <div class="o2"></div>
    <div class="o3"></div>
    <div class="o4"></div>
    <div class="o5"></div>
    <div class="o6"></div>
    <div class="sq1"></div>
    <div class="sq2"></div>
    <div class="ears"></div>
    <div class="eyes"></div>
  </div>
</div>
</template>

<style lang="scss" scoped>
#BatMan {
  position: relative;
  width: 230px;
  height: 130px;
  background-color: #fdff00;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  & .logo {
    position: absolute;
    width: 212px;
    height: 112px;
    background-color: black;
    border-radius: 50%;
  }

  & .o1 {
    position: absolute;
    background-color: #fdff00;
    width: 33px;
    height: 70px;
    border-radius: 50%;
    top: 67px;
    left: 44px;
    transform: rotate(-41deg);
  }

  & .o2 {
    position: absolute;
    background-color: #fdff00;
    width: 33px;
    height: 70px;
    border-radius: 50%;
    top: 67px;
    right: 44px;
    transform: rotate(41deg);
  }

  & .o3 {
    position: absolute;
    background-color: #fdff00;
    width: 33px;
    height: 70px;
    border-radius: 50%;
    top: 73px;
    left: 68px;
    transform: rotate(-15deg);
  }

  & .o4 {
    position: absolute;
    background-color: #fdff00;
    width: 33px;
    height: 70px;
    border-radius: 50%;
    top: 73px;
    right: 68px;
    transform: rotate(15deg);
  }

  & .o5 {
    position: absolute;
    background-color: #fdff00;
    width: 37px;
    height: 40px;
    border-radius: 50%;
    top: 0;
    left: 57px;
  }

  & .sq1 {
    position: absolute;
    height: 20px;
    width: 20px;
    background-color: #fdff00;
    top: 0;
    left: 74px;
  }

  & .o6 {
    position: absolute;
    background-color: #fdff00;
    width: 37px;
    height: 40px;
    border-radius: 50%;
    top: 0;
    right: 57px;
  }

  & .sq2 {
    position: absolute;
    height: 20px;
    width: 20px;
    background-color: #fdff00;
    top: 0;
    right: 74px;
  }

  & .eyes {
    position: absolute;
    border-bottom: 20px solid #fdff00;
    border-left: 8px solid black;
    border-right: 8px solid black;
    width: 8px;
    top: 0;
    left: 94px;
    transform: rotate(180deg);
  }
}
</style>
