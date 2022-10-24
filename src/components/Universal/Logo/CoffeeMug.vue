<template>
  <div id="coffeeMug">
  </div>
</template>

<style lang="scss" scoped>
#coffeeMug {
  position: relative;
  width: 150px;
  height: 150px;
  background-color: #3f2616;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #442918,
  0 0 0 25px #3c2415,
  0 0 0 42px #fe9407,
  0 0 0 65px #feaa3a,
  0 120px 0 -25px #3c2415,
  100px 70px 0 -25px #3c2415,
  80px 140px 0 -10px #3c2415,
  0 210px 0 -55px #3c2415,
  20px 250px 0 -65px #3c2415;
  &::before {
    content: '';
    position: absolute;
    height: 75px;
    width: 60px;
    background-color: #e49934;
    top: -85px;
    right: -75px;
    border-radius: 5px;
    transform: rotate(45deg);
  }
}
</style>
