<template>
  <div id="ButtonRotateEffect">
    <a href="">Hover Effect Swipe</a>
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
    color: #351435;
    font-size: 45px;
    border: 3px solid #351435;
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
    background-color: #351435;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: translateX(-100%);
    transition: all 1s;
  }
  & a:hover:before {
    transform: translateX(0);
  }
}
</style>
