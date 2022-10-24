<template>
  <div id="LgLogo">
    <div class="line-1"></div>
    <div class="line-2"></div>
    <div class="circle"></div>
    <div class="line-3"></div>
    <div class="line-4"></div>
  </div>
</template>

<style lang="scss" scoped>
#LgLogo {
  position: relative;
  width: 500px;
  height: 500px;
  background-color: #E31837;
  border-radius: 50%;
  & .line-1 {
    position: absolute;
    width: 400px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    border-radius: 50%;
    border: 20px solid white;
    border-right-color: transparent;
  }

  & .line-2 {
    position: absolute;
    width: 150px;
    height: 20px;
    background-color: white;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
  }

  & .circle {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    top: 120px;
    left: 130px;
  }

  & .line-3 {
    position: absolute;
    width: 20px;
    height: 250px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & .line-4 {
    position: absolute;
    width: 70px;
    height: 20px;
    background-color: white;
    top: 370px;
    left: 240px;
  }
}
</style>
