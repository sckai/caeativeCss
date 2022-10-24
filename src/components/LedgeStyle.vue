<template>
  <div id="LedgeStyle">
    <div class="clock">
      <div class="knot"></div>
      <div class="hand hourHand"></div>
      <div class="hand minHand"></div>
      <div class="hand secondHand"></div>

      <div class="clockEarLeft"></div>
      <div class="clockEarRight"></div>

      <div class="clockFootLeft"></div>
      <div class="clockFootRight"></div>
    </div>

    <div class="bookOne"></div>
    <div class="bookTwo"></div>
    <div class="bookThree"></div>

    <div class="cactus">
      <div class="pot">
        <div class="potTop"></div>
        <div class="potBottom"></div>
      </div>

      <div class="plantLeft"></div>
      <div class="plantRight"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#LedgeStyle {
  position: relative;
  width: 520px;
  height: 20px;
  background-color: #5a3f21;
  & .clock {
    position: absolute;
    width: 110px;
    height: 110px;
    background-color: #E9E6C9;
    border: 10px solid #5AA668;
    border-radius: 50%;
    left: 30px;
    top: -135px;
    & .knot {
      width: 10px;
      height: 10px;
      background-color: #9d374f;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
    }
    & .hand {
      width: 4px;
      height: 50px;
      background-color: #47321a;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -100%);
      transform-origin: bottom;
    }
    & .hourHand {
      height: 30px;
      transform: translate(-50%, -100%) rotate(45deg);
    }
    & .minHand {
      height: 40px;
      width: 3px;
      transform: translate(-50%, -100%) rotate(60deg);
    }
    & .secondHand {
      height: 47px;
      width: 2px;
      transform: translate(-50%, -100%) rotate(-40deg);
    }

    & .clockEarLeft {
      height: 30px;
      width: 60px;
      background-color: #5aa668;
      position: absolute;
      left: -38px;
      top: -12px;
      border-radius: 90px 90px 0 0;
      transform: rotate(-50deg);
    }
    & .clockEarLeft:after {
      content: '';
      height: 8px;
      width: 15px;
      background-color: #9d374f;
      position: absolute;
      top: -9px;
      left: 23px;
      border-radius: 90px 90px 0 0;
    }

    & .clockEarRight {
      height: 30px;
      width: 60px;
      background-color: #5aa668;
      position: absolute;
      right: -38px;
      top: -12px;
      border-radius: 90px 90px 0 0;
      transform: rotate(50deg);
    }
    & .clockEarRight:after {
      content: '';
      height: 8px;
      width: 15px;
      background-color: #9d374f;
      position: absolute;
      top: -9px;
      right: 23px;
      border-radius: 90px 90px 0 0;
    }

    & .clockFootLeft {
      height: 50px;
      width: 12px;
      background-color: #47321a;
      position: absolute;
      left: 20px;
      bottom: -25px;
      transform: rotate(30deg);
      z-index: -1;
    }
    & .clockFootRight {
      height: 50px;
      width: 12px;
      background-color: #47321a;
      position: absolute;
      right: 20px;
      bottom: -25px;
      transform: rotate(-30deg);
      z-index: -1;
    }
  }

  & .bookOne {
    width: 40px;
    height: 170px;
    background-color: #9d374f;
    position: absolute;
    left: 210px;
    top: -170px;
  }
  & .bookTwo {
    width: 40px;
    height: 195px;
    background-color: #e86830;
    position: absolute;
    left: 250px;
    top: -195px;
  }
  & .bookThree {
    width: 40px;
    height: 180px;
    background-color: #5AA668;
    position: absolute;
    left: 290px;
    top: -180px;
  }
  & .bookOne:before, .bookTwo:before, .bookThree:before {
    content: '';
    width: 100%;
    height: 20px;
    background-color: #e9e6c9;
    position: absolute;
    left: 0;
    top: 20px;
  }
  & .bookOne:after, .bookTwo:after, .bookThree:after {
    content: '';
    width: 50%;
    height: 100%;
    background-color: black;
    opacity: 0.15;
    position: absolute;
    top: 0;
    right: 0;
  }

  & .cactus {
    width: 100px;
    height: 180px;
    position: absolute;
    left: 380px;
    top: -180px;
    & .pot {
      width: 100%;
      height: 50%;
      position: absolute;
      bottom: 0;
      background-color: blue;
      & .potBottom {
        width: 100%;
        height: 70%;
        background-color: #ce4f17;
        position: absolute;
        bottom: 0;
      }
      & .potTop {
        width: 140%;
        height: 30%;
        background-color: #a03d12;
        position: absolute;
        top: 0;
        left: -20%;
      }
    }
    & .plantLeft {
      width: 45%;
      height: 35%;
      background-color: #5aa668;
      position: absolute;
      bottom: 50%;
      left: 5%;
      border-radius: 50px 50px 0 0;
    }
    & .plantRight {
      width: 45%;
      height: 50%;
      background-color: #5aa668;
      position: absolute;
      bottom: 50%;
      right: 5%;
      border-radius: 50px 50px 0 0;
    }
  }
}
</style>
