<template>
<div id="PepsiLogo">
</div>
</template>

<style lang="scss" scoped>
#PepsiLogo {
  height: 300px;
  width: 300px;
  background-color: #34588e;
  border-radius: 50%;
  border: 10px solid white;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    height: 400px;
    width: 500px;
    border-radius: 25%;
    background-color: white;
    top: -160px;
    left: -240px;
    transform: rotate(-18deg);
  }
  &::after {
    content: '';
    position: absolute;
    height: 500px;
    width: 550px;
    border-radius: 50%;
    background-color: #da473c;
    top: -275px;
    left: -300px;
  }
}
</style>
