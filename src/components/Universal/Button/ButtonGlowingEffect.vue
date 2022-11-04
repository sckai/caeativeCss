<template>
  <div id="ButtonGlowingEffect">
    <a href="#">Button</a>
  </div>
</template>

<style lang="scss" scoped>
#ButtonGlowingEffect {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    text-decoration: none;
    color: #d4d4d4;
    font-size: 40px;
    border: 3px solid #d4d4d4;
    padding: 40px 80px;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }
  & a:hover {
    background-color: #f44336;
  }
  & a:before {
    content: '';
    background-color: #d4d4d4;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    position: absolute;
    transform: translateX(-100%) rotate(45deg);
    transition: all 0.3s;
  }
  & a:hover:before {
    transform: translateX(100%) rotate(45deg);
  }
}
</style>
