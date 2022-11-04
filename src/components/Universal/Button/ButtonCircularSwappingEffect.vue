<template>
  <div id="ButtonCircularSwappingEffect">
    <button class="btn">Button</button>
  </div>
</template>

<style lang="scss" scoped>
#ButtonCircularSwappingEffect {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & .btn {
    border: 2px solid tomato;
    background: none;
    padding: 20px 40px;
    font-size: 25px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.5s;
    position: relative;
    color: tomato;
    overflow: hidden;
  }
  & .btn:hover {
    color: white;
  }
  & .btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: tomato;
    z-index: -1;
    border-radius: 0 0 50% 50%;
    height: 0%;
    transition: all 0.5s;
  }
  & .btn:hover:before {
    height: 100%;
  }
}
</style>
