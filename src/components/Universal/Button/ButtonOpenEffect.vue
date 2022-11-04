<template>
  <div id="ButtonOpenEffect">
    <a href="#">Button</a>
  </div>
</template>

<style lang="scss" scoped>
#ButtonOpenEffect {
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    width: 300px;
    height: 60px;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    line-height: 60px;
    font-size: bold;
    letter-spacing: 2px;
    position: relative;
    transition: all 0.2s;
    color: white;
  }
  & a:hover {
    color: #272727;
  }
  & a:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    background-color: #20caff;
    mix-blend-mode: multiply;
    transition: all 0.2s;
    transform-origin: top;
  }
  & a:hover:before {
    top: -6px;
    left: 0;
    transform: perspective(1000px) rotateX(75deg);
  }
  & a:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 100%;
    height: 100%;
    background-color: #ff7675;
    transition: all 0.2s;
    z-index: -1;
    transform-origin: bottom;
  }
  & a:hover:after {
    top: -6px;
    left: 0;
    transform: perspective(1000px) rotateX(-75deg);
  }
}
</style>
