<template>
<div id="BeaverStyle">
  <div class="frame">
    <div class="earLeft"></div>
    <div class="earRight"></div>

    <div class="body">
      <div class="bow"></div>
      <div class="heart"></div>
      <div class="armLeft"></div>
      <div class="armRight"></div>
    </div>

    <div class="eyeLeft">
      <div class="lashes"></div>
    </div>
    <div class="eyeRight">
      <div class="lashes"></div>
    </div>

    <div class="teeth"></div>

    <div class="muzzle"></div>

    <div class="whiskersLeft"></div>
    <div class="whiskersRight"></div>

    <div class="nose"></div>
  </div>
</div>
</template>

<style lang="scss" scoped>
#BeaverStyle {
  & .frame {
    width: 350px;
    height: 420px;
    background-color: #F0D0D1;
    border: 20px solid white;
    position: relative;
    & .earLeft {
      position: absolute;
      width: 38px;
      height: 46px;
      background-color: #f0a77e;
      border: 8px solid #a35a37;
      top: 15%;
      left: 18%;
      border-radius: 50%;
      transform: rotate(-45deg);
    }
    & .earRight {
      position: absolute;
      width: 38px;
      height: 46px;
      background-color: #f0a77e;
      border: 8px solid #a35a37;
      top: 15%;
      right: 18%;
      border-radius: 50%;
      transform: rotate(45deg);
    }

    & .body {
      position: absolute;
      width: 70%;
      height: 90%;
      background-color: #a35a37;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50% 50% 0 0;
      & .bow {
        position: absolute;
        width: 30px;
        height: 25px;
        background-color: #F0D0D1;
        right: 25%;
        top: 8%;
        border-radius: 50% 15% 15% 50%;
        transform: rotate(10deg);
      }
      & .bow:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #F0D0D1;
        border-radius: 15% 50% 50% 15%;
        left: -30px;
      }
      & .heart {
        position: absolute;
        width: 85px;
        height: 85px;
        background-color: #F0D0D1;
        top: 70%;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
      }
      & .heart:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #F0D0D1;
        transform: translateY(-50%);
        border-radius: 50%;
      }
      & .heart:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #F0D0D1;
        transform: translateX(-50%);
        border-radius: 50%;
      }
      & .armLeft {
        position: absolute;
        width: 45%;
        height: 20%;
        background-color: #7a3b1a;
        left: 0;
        bottom: 10%;
        border-radius: 0 50px 50px 0;
        transform: skewY(5deg);
      }
      & .armRight {
        position: absolute;
        width: 45%;
        height: 20%;
        background-color: #7a3b1a;
        right: 0;
        bottom: 10%;
        border-radius: 50px 0 0 50px;
        transform: skewY(-5deg);
      }
    }

    & .eyeLeft {
      position: absolute;
      width: 20px;
      height: 10px;
      border: 3px solid #3C2114;
      border-top: 0;
      border-bottom-left-radius: 100px;
      border-bottom-right-radius: 100px;
      top: 35%;
      left: 32%;
    }
    & .eyeRight {
      position: absolute;
      width: 20px;
      height: 10px;
      border: 3px solid #3C2114;
      border-top: 0;
      border-bottom-left-radius: 100px;
      border-bottom-right-radius: 100px;
      top: 35%;
      right: 32%;
    }
    .lashes {
      position: absolute;
      width: 2px;
      height: 8px;
      background-color: #3C2114;
      bottom: -8px;
      left: 48%;
    }
    .lashes:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #3C2114;
      left: -10px;
      top: -2px;
      transform: rotate(20deg);
    }
    .lashes:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #3C2114;
      right: -10px;
      top: -2px;
      transform: rotate(-20deg);
    }

    & .teeth {
      position: absolute;
      width: 44px;
      height: 40px;
      background-color: white;
      left: 44%;
      top: 53%;
      border-radius: 5px;
    }
    & .teeth::before {
      content: '';
      position: absolute;
      width: 2px;
      height: 100%;
      background-color: #a35a37;
      left: 50%;
      border-radius: 5px;
      transform: translateX(-50%);
    }

    & .muzzle {
      position: absolute;
      width: 87px;
      height: 55px;
      background-color: #ffd49d;
      top: 45%;
      left: 27%;
      border-radius: 50px 0 0 50px;
      transform: rotate(-10deg);
    }
    & .muzzle::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #ffd49d;
      left: 100%;
      border-radius: 0 50px 50px 0;
      transform: rotate(20deg);
      transform-origin: left top;
    }

    & .whiskersLeft {
      position: absolute;
      width: 105px;
      height: 2px;
      background-color: #7a3b1a;
      left: 10%;
      top: 48%;
      transform: rotate(10deg);
    }

    & .whiskersLeft::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #7a3b1a;
      left: 2px;
      top: 15px;
      transform: rotate(-10deg);
    }

    & .whiskersLeft::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #7a3b1a;
      left: 2px;
      top: 30px;
      transform: rotate(-20deg);
    }

    & .whiskersRight {
      position: absolute;
      width: 105px;
      height: 2px;
      background-color: #7a3b1a;
      right: 10%;
      top: 48%;
      transform: rotate(-10deg);
    }

    & .whiskersRight::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #7a3b1a;
      right: 2px;
      top: 15px;
      transform: rotate(10deg);
    }

    & .whiskersRight::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #7a3b1a;
      right: 2px;
      top: 30px;
      transform: rotate(20deg);
    }

    & .nose {
      position: absolute;
      width: 56px;
      height: 42px;
      background-color: #3C2114;
      left: 42%;
      top: 42%;
      border-radius: 100% 100% 40% 40%;
    }
  }
}
</style>
