<template>
  <div id="ButtonSeparateEffect">
    <a href="">Hover Effect Swipe</a>
  </div>
</template>

<style lang="scss" scoped>
#ButtonSeparateEffect {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    position: relative;
    font-family: sans-serif;
    text-decoration: none;
    color: #262626;
    font-size: 45px;
    border: 3px solid #262626;
    padding: 40px 80px;
    transition: all 1s;
    overflow: hidden;
  }
  & a:hover {
    color: white;
  }
  & a:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: #262626;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: rotateX(90deg);
    transition: all 1s;
  }
  & a:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: #262626;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: rotateY(90deg);
    transition: all 1s;
  }
  & a:hover:before {
    transform: rotateX(0deg);
  }
  & a:hover:after {
    transform: rotateY(0deg);
  }
}
</style>
