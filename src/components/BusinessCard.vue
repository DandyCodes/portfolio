<script setup lang="ts">
function flip() {
  const businessCard = document.querySelector(".business-card") as HTMLDivElement
  businessCard.classList.toggle("flipped")
}
</script>

<template>
  <div class="business-card-container">
    <div class="business-card" @click="flip">
      <figure class="front">
        <img src="/3.jpg" alt="front" />
        <div class="caption">
          <h2>john <span>barker</span></h2>
          <p>full stack software developer</p>
        </div>
      </figure>

      <figure class="back">
        <img src="http://www.jboeijenga.nl/img/back.jpg" alt="back" />
        <div class="caption">
          <!-- <img src="/headshot.jpg" /> -->
          <!-- <a class="icon-box" href="https://www.facebook.com" target="_blank">
            <o-icon pack="fas" icon="plus" />
          </a> -->
          <dl>
            <dt>Phone</dt>
            <dd>+61 458 604 738</dd>
            <dt>Email</dt>
            <dd>jdabarker@gmail.com</dd>
            <dt>Web</dt>
            <dd>dandycodes.github.io/portfolio</dd>
          </dl>
        </div>
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway:400,300,800);
@import url(https://fonts.googleapis.com/css?family=Lato:300,700);

.business-card-container,
figure {
  width: 30rem;
  height: 18rem;
}

.business-card-container {
  perspective: 1000;
}

.business-card {
  position: relative;
  transition: 0.6s;
  transform-style: preserve-3d;
}

figure {
  background: #2e5d5a;
  color: #fff;
  backface-visibility: hidden;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  cursor: pointer;
  transition: 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.9);
}

figure.front {
  transform: rotateY(0deg);
  //   z-index: 2;
}

figure.back,
.business-card.flipped {
  transform: rotateY(180deg);
}

figure img {
  position: relative;
  display: block;
  min-height: 100%;
  opacity: 0.7;
}

figure .caption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  padding: 2em;
  backface-visibility: hidden;
}

.front .caption {
  font-size: 1.25em;
}

.front .caption:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(72, 76, 97, 0) 0%, rgba(72, 76, 97, 0.8) 75%);
  content: "";
  opacity: 0;
  transform: translate3d(0, 50%, 0);
  transition: opacity 0.35s, transform 0.35s;
}

.front:hover .caption:before {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.front h2 {
  word-spacing: -0.15em;
  font-weight: 300;
  font-size: 1.6em;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  color: #272833;
  transition: transform 0.35s, color 0.35s;
  transform: translate3d(0, -50%, 0);
}

.front h2 span {
  font-weight: bold;
}

.front h2:after {
  position: absolute;
  bottom: -10px;
  left: 70px;
  right: 70px;
  height: 2px;
  background: #fff;
  content: "";
  transition: transform 0.35s;
  transform: translate3d(-130%, 0, 0);
}

.front:hover h2 {
  color: #fff;
  -webkit-transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
  transform: translate3d(0, -50%, 0) translate3d(0, -40px, 0);
}

.front:hover h2:after {
  transform: translate3d(0, 0, 0);
}

.front p {
  letter-spacing: 1px;
  font-size: 68.5%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 2em;
  width: 100%;
  opacity: 0;
  transform: translate3d(0, 10px, 0);
  transition: opacity 0.35s, transform 0.35s;
}

.back .caption:before,
.back .caption:after {
  position: absolute;
  top: 30px;
  right: 30px;
  bottom: 30px;
  left: 30px;
  content: "";
  opacity: 0;
  transition: opacity 0.45s, transform 0.45s;
  transition-delay: 1s;
}

.back .caption:before {
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transform: scale(0, 1);
}

.back .caption:after {
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  transform: scale(1, 0);
}

.business-card.flipped .back .caption:before,
.business-card.flipped .back .caption:after {
  opacity: 0.9;
  transform: scale(1);
}

.back dl {
  font-family: "Lato", Arial, sans-serif;
  font-weight: 300;
  bottom: 40px;
  left: 40px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.35s, transform 0.35s;
  transition-delay: 0.85s;
  transform: translate3d(-40px, 0, 0);
}

.business-card.flipped .back dl {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

dl dt {
  float: left;
  width: 60px;
  overflow: hidden;
  clear: left;
  text-align: right;
  font-weight: 700;
}

dl dd {
  margin-left: 80px;
  text-align: left;
}

dl dd:before,
dl dd:after {
  display: table;
  content: " ";
}

dl dd:after {
  clear: both;
}

.front:hover p {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}
</style>