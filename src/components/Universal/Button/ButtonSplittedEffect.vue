<template>
  <div id="ButtonSplittedEffect">
    <a href="#">
      <span>Button</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
#ButtonSplittedEffect {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 25px;
    color: #f6b93b;
    letter-spacing: 3px;
    padding: 25px 50px;
    border: 3px solid #f6b93b;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
    & span:before, span:after {
      content: '';
      position: absolute;
      width: 25%;
      height: 100%;
      background-color: #f6b93b;
      z-index: -1;
      transition: all 0.5s;
    }
    & span:before {
      top: 100%;
      right: 25%;
    }
    & span:after {
      top: 0;
      right: -25%;
    }
  }
  & a:hover {
    color: #222;
  }
  & a:before, a:after{
    content: '';
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: #f6b93b;
    z-index: -1;
    transition: all 0.5s;
  }
  & a:before {
    top: 0;
    left: -25%;
  }
  & a:hover:before {
    left: 0;
  }
  & a:after {
    top: -100%;
    left: 25%;
  }
  & a:hover:after {
    top: 0;
  }
  & a:hover span:before {
    top: 0;
    right: 25%;
  }
  & a:hover span:after {
    top: 0;
    right: 0;
  }
}
</style>
