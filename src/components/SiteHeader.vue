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
            <span class="main-nav-item">About</span>
          </RouterLink>

          <RouterLink to="/about" class="navbar-item">
            <span class="main-nav-item">Projects</span>
          </RouterLink>

          <RouterLink to="/about" class="navbar-item">
            <span class="main-nav-item">Contact</span>
          </RouterLink>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span class="main-nav-item">More</span>
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

.navbar {
  position: relative;
  z-index: 1;
  &::before {
    z-index: -1;
    background-color: $dark;
    filter: opacity(0.75);
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &::after {
    z-index: -1;
    filter: opacity(0.4);
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-bottom: $white-ter thin solid;
  }
}

#logo {
  width: 45px;
  height: 45px;
  background-image: url("/logo.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.main-nav-item {
  display: flex;
  gap: 0.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 100%;
  &::before {
    content: "< ";
    font-weight: 900;
    font-size: 2rem;
    color: $link;
  }

  &::after {
    content: "/>";
    font-weight: 900;
    font-size: 2rem;
    color: $link;
  }
}
</style>