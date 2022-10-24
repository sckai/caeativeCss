<template>
  <div id="WatchmelonStyle">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style lang="scss" scoped>
#WatchmelonStyle {
  width: 320px;
  height: 160px;
  background-color: #fd646c;
  border-left: 20px solid #5AF5b6;
  border-bottom: 20px solid #5AF5b6;
  border-right: 20px solid #5AF5b6;
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;

  & span {
    width: 10px;
    height: 10px;
    background-color: #262626;
    border-radius: 50%;
    display: inline-block;
    margin: 20px;
  }

  & span:nth-child(7), & span:nth-child(12), & span:nth-child(13), & span:nth-child(16) {
    opacity: 0;
  }
}
</style>
