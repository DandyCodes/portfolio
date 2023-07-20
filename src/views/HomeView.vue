<script setup lang="ts">
import SiteHeader from "../components/SiteHeader.vue"
import BusinessCard from "../components/BusinessCard.vue"
</script>

<template>
  <div id="home">
    <SiteHeader />
    <main>
      <div class="is-flex is-justify-content-center p-5">
        <BusinessCard />
      </div>
      <div class="container">
        <div id="hero-box-container">
          <div id="hero-box">
            <div class="main-point">
              <p class="title is-italic">Design</p>
              <p class="subtitle">Memorable and engaging user experiences</p>
            </div>
            <div class="main-point">
              <p class="title is-italic">Develop</p>
              <p class="subtitle">Scalable, efficient and maintainable software platforms</p>
            </div>
            <div class="main-point">
              <p class="title is-italic">Deliver</p>
              <p class="subtitle">
                Quality realisation of your vision through collaborative effort
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

#home {
  background-color: $dark;
  &::before {
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url("/4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    filter: opacity(0.5);
  }

  #hero-box-container {
    display: flex;
    justify-content: center;
    padding-top: 5rem;

    #hero-box {
      height: 30rem;
      .main-point {
        z-index: 1;
        position: relative;
        margin: 1rem;
        padding: 2rem;
        .title {
          border-bottom: thin $link solid;
        }
        .title,
        .subtitle {
          color: $text;
        }

        &::before {
          z-index: -1;
          transform: skewX(-20deg);
          padding: 1rem;
          background-color: $dark;
          filter: opacity(0.75);
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-left: $link thin solid;
          border-right: $link thin solid;
        }
      }
    }
  }
}
</style>