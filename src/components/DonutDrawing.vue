<template>
  <div id="DonutDrawing">
    <div class="dountBody"></div>
    <div class="face"></div>
    <div class="highlight"></div>
  </div>
</template>

<style lang="scss" scoped>
#DonutDrawing {
  position: relative;
  width: 100px;
  height: 100px;

  & .dountBody {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f77778;
    border: 2px solid #003459;
    border-radius: 50%;
    box-sizing: border-box;
  }

  & .dountBody::before {
    content: '';
    position: absolute;
    width: 93px;
    height: 93px;
    background-color: #faa7a8;
    right: 0;
    border-radius: 50%;
  }

  & .dountBody::after {
    content: '';
    position: absolute;
    width: 30%;
    height: 30%;
    background-color: white;
    border: 2px solid #003459;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  & .face {
    width: 18px;
    height: 8px;
    position: absolute;
    border: 3px solid #003459;
    border-top: 0;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    top: 24px;
    left: 39px;
  }

  & .face::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: #003459;
    border-radius: 50%;
    position: absolute;
    top: -16px;
    left: -7px;
    box-shadow: 24px 0 #003459;
  }

  & .highlight {
    width: 18px;
    height: 18px;
    border: 4px solid white;
    border-top: 0;
    border-right: 0;
    position: absolute;
    left: 24px;
    top: 54px;
    border-bottom-left-radius: 50px;
    opacity: 0.5;
  }
}
</style>
