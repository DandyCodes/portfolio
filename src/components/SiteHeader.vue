<script setup lang="ts">
import { RouterLink } from "vue-router"

function navBurgerClick(e: Event) {
  const burger: HTMLAnchorElement = e.target as HTMLAnchorElement
  const target = document.getElementById(burger.dataset.target as string)
  burger.classList.toggle("is-active")
  target?.classList.toggle("is-active")
}
</script>

<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item">
          <figure id="logo"></figure>
        </RouterLink>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarItems"
          @click="navBurgerClick"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarItems" class="navbar-menu is-size-5">
        <div class="navbar-start"></div>

        <div class="navbar-end">
          <RouterLink to="/about" class="navbar-item">
            <o-icon pack="fas" icon="info-circle" /> <span class="pl-1">About</span>
          </RouterLink>

          <RouterLink to="/about" class="navbar-item"
            ><o-icon pack="fas" icon="pen-ruler" /> <span class="pl-1">Projects</span>
          </RouterLink>

          <RouterLink to="/about" class="navbar-item">
            <o-icon pack="fas" icon="address-book" /> <span class="pl-1">Contact</span>
          </RouterLink>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <o-icon pack="fas" icon="circle-question" /> <span>More</span>
            </a>
            <div class="navbar-dropdown">
              <RouterLink to="/about" class="navbar-link">
                <o-icon pack="fas" icon="linkedin" /> Linkedin
              </RouterLink>
              <RouterLink to="/about" class="navbar-link">
                <o-icon pack="fas" icon="github" /> Github
              </RouterLink>
              <hr class="navbar-divider" />
              <RouterLink to="/about" class="navbar-link">
                <o-icon pack="fas" icon="file-pdf" /> Resume
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

#logo {
  width: 45px;
  height: 45px;
  background-image: url("/logo.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
</style>