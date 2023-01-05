<template>
  <div id="RainView">
    <section></section>
  </div>
</template>

<style lang="scss" scoped>
#RainView {
  & section {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url('@/assets/image/RainViewBg.jpg');
    background-size: cover;
    animation: animate 2s linear infinite;
  }
  & section:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('@/assets/image/RainViewRain.png');
    animation: rain .5s linear infinite
  }
}

@keyframes animate {
  0% {
    filter: hue-rotate(0deg)
  }
  100% {
    filter: hue-rotate(360deg)
  }
}

@keyframes rain {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 20% 100%;
  }
}
</style>
