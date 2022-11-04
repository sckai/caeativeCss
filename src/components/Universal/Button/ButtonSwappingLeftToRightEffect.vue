<template>
  <div id="ButtonSwappingLeftToRightEffect">
    <a href="#">Button</a>
  </div>
</template>

<style lang="scss" scoped>
#ButtonSwappingLeftToRightEffect {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    padding: 20px 40px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 4px;
    color: transparent;
    border: 3px solid #ff0;
    font-size: 30px;
    position: relative;
    overflow: hidden;
  }
  & a:before {
    content: 'Button';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #353535;
    color: #ff0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
  }
  & a:hover:before {
    left: 100%;
    transform: scale(0) rotateY(360deg);
    opacity: 0;
  }
  & a:after {
    content: 'Button';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #353535;
    color: #ff0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    transform: scale(0) rotateY(0deg);
    opacity: 0;
  }
  & a:hover:after {
    left: 0;
    transform: scale(1) rotateY(360deg);
    opacity: 1;
  }
}
</style>
