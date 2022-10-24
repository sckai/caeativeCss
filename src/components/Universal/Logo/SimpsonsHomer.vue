<template>
  <div id="SimpsonsHomer">
    <div class="head">
      <div class="forehead"></div>
      <div class="hairOne"></div>
      <div class="hairTwo"></div>

      <div class="neck"></div>

      <div class="faceSideOne"></div>
      <div class="faceSideTwo"></div>

      <div class="eyeLeft">
        <div class="pupilLeft"></div>
      </div>
      <div class="eyeRight">
        <div class="pupilRight"></div>
      </div>

      <div class="mouth">
        <div class="mouthPartOne"></div>
        <div class="mouthPartTwo"></div>
      </div>
      <div class="mouthPartThree"></div>
      <div class="mouthPartFour"></div>
      <div class="mouthPartFive"></div>

      <div class="ear">
        <div class="earOne">
          <div class="earTwo"></div>
        </div>
      </div>

      <div class="nose"></div>

      <div class="collarLeft"></div>
      <div class="collarRight"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#SimpsonsHomer{
  position: relative;
  width: 215px;
  height: 405px;
  background-color: green;
  & .forehead {
    position: absolute;
    width: 170px;
    height: 200px;
    background-color: #fed90f;
    border: 1px solid #000;
    top: 10px;
    border-radius: 60%/50%;
    transform: rotate(-18deg);
  }

  & .hairOne {
    position: absolute;
    width: 80px;
    height: 70px;
    border-top: 2px solid #000;
    top: 15px;
    border-radius: 50%;
    transform: rotate(-40deg);
  }
  & .hairTwo {
    position: absolute;
    width: 80px;
    height: 70px;
    border-top: 2px solid #000;
    left: 10px;
    border-radius: 50%;
    transform: rotate(-30deg);
  }

  & .neck{
    position: absolute;
    width: 125px;
    height: 150px;
    background-color: #fed90f;
    top: 200px;
    left: 28px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    transform: rotate(2deg);
  }

  & .faceSideOne {
    position: absolute;
    width: 140px;
    height: 60px;
    background-color: #FED90F;
    top: 185px;
    left: 30px;
  }
  & .faceSideTwo {
    position: absolute;
    width: 40px;
    height: 60px;
    background-color: #FED90F;
    top: 165px;
    left: 22px;
    transform: rotate(-11deg);
    border-left: 1px solid black;
  }

  & .eyeLeft {
    position: absolute;
    width: 75px;
    height: 75px;
    background-color: white;
    border: 1px solid #000;
    border-radius: 50%;
    left: 120px;
    top: 110px;
    & .pupilLeft {
      position: absolute;
      width: 9px;
      height: 9px;
      background-color: #000;
      border-radius: 50%;
      left: 35px;
      top: 40px;
    }
  }
  & .eyeRight {
    position: absolute;
    width: 75px;
    height: 75px;
    background-color: white;
    border: 1px solid #000;
    border-radius: 50%;
    left: 60px;
    top: 115px;
    & .pupilRight {
      position: absolute;
      width: 9px;
      height: 9px;
      background-color: #000;
      border-radius: 50%;
      left: 25px;
      top: 40px;
    }
  }

  & .mouth{
    position: absolute;
    width: 115px;
    height: 120px;
    background-color: #D1b271;
    top: 207px;
    left: 60px;
    border-radius: 50%;
    border: 1px solid black;
    & .mouthPartOne {
      position: absolute;
      width: 20px;
      height: 30px;
      background-color: #D1b271;
      top: 62px;
      left: 98px;
      border-radius: 50%;
      border-right: 1px solid black;
      transform: rotate(15deg);
    }
    & .mouthPartTwo {
      position: absolute;
      width: 120px;
      height: 60px;
      background-color: #D1b271;
      top: 20px;
      left: 30px;
      border-radius: 60%;
      border-bottom: 1px solid black;
      transform: rotate(-6deg);
    }
  }
  & .mouthPartThree {
    position: absolute;
    width: 35px;
    height: 48px;
    background-color: #D1b271;
    top: 230px;
    left: 165px;
    border-radius: 10%;
    border-top: 1px solid black;
    transform: rotate(40deg);
  }
  & .mouthPartFour {
    position: absolute;
    width: 60px;
    height: 30px;
    background-color: #D1b271;
    top: 200px;
    left: 130px;
    border-right: 1px solid black;
    border-top-right-radius: 70%;
  }
  & .mouthPartFive {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #D1b271;
    top: 260px;
    left: 80px;
  }

  & .ear {
    position: absolute;
    width: 32px;
    height: 37px;
    background-color: #FED90F;
    top: 200px;
    left: 10px;
    border-radius: 50%;
    transform: rotate(10deg);
    border: 1px solid black;
  }
  & .earOne {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 8px;
    left: 8px;
    border-left: 1px solid black;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    & .earTwo {
      position: absolute;
      width: 8px;
      height: 8px;
      top: -2px;
      border-bottom: 1px solid black;
    }
  }

  & .nose {
    position: absolute;
    width: 60px;
    height: 32px;
    background-color: #FED90F;
    top: 175px;
    left: 130px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
  }

  & .collarLeft {
    position: absolute;
    width: 110px;
    height: 60px;
    background-color: white;
    top: 330px;
    left: 10px;
    transform: rotate(15deg);
    border-radius: 10%;
    border: 1px solid black;
  }
  & .collarRight {
    position: absolute;
    width: 20px;
    height: 50px;
    background-color: white;
    top: 340px;
    left: 150px;
    transform: rotate(-20deg);
    border-radius: 10%;
    border: 1px solid black;
  }
}
</style>
