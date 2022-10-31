<template>
  <div id="BracketsLogo">
  </div>
</template>

<style lang="scss" scoped>
#BracketsLogo {
  position: relative;
  width: 200px;
  height: 175px;
  background-color: white;
  border-radius: 31px;
  box-shadow: 0 0 0 28px #28a9e1, 0 28px 0 28px #115a91;
}

#BracketsLogo::before {
  content: '';
  position: absolute;
  width: 50%;
  height: 44%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% ,-50%);
  border: 28px solid #4d4d4d;
}

#BracketsLogo::after {
  content: '';
  position: absolute;
  width: 10%;
  height: 100%;
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
