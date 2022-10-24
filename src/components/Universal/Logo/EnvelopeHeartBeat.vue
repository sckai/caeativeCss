<template>
<div id="EnvelopeHeartBeat">
  <div class="heart"></div>
</div>
</template>

<style lang="scss" scoped>
#EnvelopeHeartBeat {
  width: 0;
  height: 0;
  border-top: 100px solid #eee;
  border-right: 170px solid #ddd;
  border-bottom: 100px solid #ccc;
  border-left: 170px solid #ccc;
  & .heart {
    width: 32px;
    height: 32px;
    background-color: #ff3838;
    transform: translate(-50%, -50%) rotate(45deg);
    animation: heartBeat 1.4s linear infinite;
  }

  & .heart::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ff3838;
    border-radius: 50%;
    transform: translateY(-50%);
  }

  & .heart::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ff3838;
    border-radius: 50%;
    transform: translateX(-50%);
  }
}

@keyframes heartBeat {
  0% { transform: translate(-50%, -50%) rotate(45deg) scale(1); }
  25% { transform: translate(-50%, -50%) rotate(45deg) scale(1); }
  30% { transform: translate(-50%, -50%) rotate(45deg) scale(1.4); }
  50% { transform: translate(-50%, -50%) rotate(45deg) scale(1.2); }
  70% { transform: translate(-50%, -50%) rotate(45deg) scale(1.4); }
  100% { transform: translate(-50%, -50%) rotate(45deg) scale(1); }
}
</style>
