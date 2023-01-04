<template>
  <div id="ScrollingTextView">
    <section>
      <div>
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ut accusantium iure sapiente modi, velit minus nihil quae aperiam cupiditate, possimus magni deserunt suscipit dolorum dolores quos doloribus atque ex.</h2>
      </div>
      <div>
        <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum ut accusantium iure sapiente modi, velit minus nihil quae aperiam cupiditate, possimus magni deserunt suscipit dolorum dolores quos doloribus atque ex.</h2>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,800,900&display=swap');
#ScrollingTextView {
  font-family: 'Source Sans Pro', sans-serif;
  & section {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    overflow: hidden;
    & div {
      position: relative;
      width: 50%;
      background-color: #20506b;
      overflow: hidden;
      & h2 {
        position: absolute;
        white-space: nowrap;
        font-size: 12em;
        line-height: 100vh;
        color: #fff;
        animation: animate 60s linear infinite;
      }
    }

    & div:nth-child(1) {
      position: relative;
      width: 50%;
      // background-color: url(test.jpg);
      overflow: hidden;
      & h2 {
        -webkit-text-stroke: 2px;
        -webkit-text-stroke-color: #fff;
        -webkit-text-fill-color: transparent;
        left: 100%;
      }
    }
  }
}

@keyframes animate {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
