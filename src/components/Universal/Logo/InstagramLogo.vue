<template>
  <div id="InstagramLogo">
    <div class="square">
      <div class="circleBig"></div>
      <div class="circleSmall"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#InstagramLogo {
  width: 200px;
  height: 200px;
  border-radius: 60px;
  background: radial-gradient(circle at 30% 107%, #FDF497 5%, #FD5949 45%, #D6249F 60%, #285AEB 90%);
  display: flex;
  justify-content: center;
  align-items: center;

  & .square {
    width: 140px;
    height: 140px;
    background-color: transparent;
    border: 12px solid white;
    border-radius: 45px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .circleBig {
    height: 60px;
    width: 60px;
    background-color: transparent;
    border: 12px solid white;
    border-radius: 50%;
  }

  & .circleSmall {
    height: 15px;
    width: 15px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 15px;
    right: 15px;
  }
}
</style>
