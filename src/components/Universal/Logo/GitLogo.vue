<template>
  <div id="GitLogo">
    <div class="line1"></div>
    <div class="line2"></div>
  </div>
</template>

<style lang="scss" scoped>
#GitLogo {
  width: 150px;
  height: 150px;
  background-color: #f05033;
  border-radius: 15px;
  position: relative;
  transform: rotate(45deg);

  & .line1 {
    width: 110px;
    height: 12px;
    background-color: white;
    position: absolute;
    top: 40px;
  }

  & .line1::before {
    content: '';
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 30px;
    top: -8px;
  }

  & .line1::after {
    content: '';
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 90px;
    top: -8px;
  }

  & .line2 {
    width: 90px;
    height: 12px;
    background-color: white;
    position: absolute;
    top: 70px;
    left: 30px;
    transform: rotate(45deg);
  }

  & .line2::before {
    content: '';
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    left: 70px;
    top: -8px;
  }
}
</style>
