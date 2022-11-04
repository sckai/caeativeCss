<template>
  <div id="ButtonRotateEffect">
    <a href="">Hover Effect Rotate</a>
  </div>
</template>

<style lang="scss" scoped>
#ButtonRotateEffect {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    position: relative;
    font-family: sans-serif;
    text-decoration: none;
    color: #272727;
    font-size: 45px;
    border: 5px solid #272727;
    padding: 40px 80px;
    overflow: hidden;
  }
  & a:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: #fff200;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform-origin: bottom left;
    transform: rotate(-90deg);
    transition: transform 1s;
  }
  & a:hover:before {
    transform: rotate(0deg);
  }
}
</style>
