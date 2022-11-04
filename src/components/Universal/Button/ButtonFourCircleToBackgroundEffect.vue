<template>
  <div id="ButtonFourCircleToBackgroundEffect">
    <a href="#">
      <span></span>
      Button
    </a>
  </div>
</template>

<style lang="scss" scoped>
#ButtonFourCircleToBackgroundEffect {
  width: 400px;
  height: 400px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  & a {
    width: 220px;
    height: 80px;
    color: #ff0;
    background-color: transparent;
    font-size: 26px;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    line-height: 80px;
    transition: all 0.5s;
    padding: 20px 40px;
    position: relative;
    & span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #ff0;
      border-radius: 8px;
      transform: scale(0);
      transition: all 0.3s;
      z-index: -1;
    }
  }
  & a:hover {
    color: #262626;
    transition-delay: 0.4s;
  }
  & a:hover span {
    transform: scale(1);
    transition-delay: 0.4s;
  }
  & a:before, a:after {
    content: "";
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background-color: #ff0;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: all 0.3s;
    z-index: -1;
    opacity: 0;
  }
  & a:before {
    left: 0;
    box-shadow: -100px 0 0 #ff0;
  }
  & a:after {
    right: 0;
    box-shadow: 100px 0 0 #ff0;
  }
  & a:hover:before {
    left: 50%;
    box-shadow: 30px 0 0 #ff0;
    transform: translateX(-50%) translateY(-50%);
     opacity: 1;
  }
  & a:hover:after {
    right: 50%;
    box-shadow: -30px 0 0 #ff0;
    transform: translateX(50%) translateY-(50%);
    opacity: 1;
  }
}
</style>
