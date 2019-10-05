<template>
  <div
    class=" bg-background-primary bg-premiere flex flex-col h-full content-center"
    :class="theme"
  >
    <div class="container mx-auto text-copy-primary m-8 md:flex-1">
      <h1>
        <nuxt-link to="/">
          Albertfoundation
        </nuxt-link>
      </h1>

      <div class="flex flex-col h-full content-center w-full">
        <nuxt/>


        <a href="#"
          class="text-gray-800 hover:text-gray-600"
          @click.prevent="toggleTheme"
          >Theme</a>

      </div>
    </div>
    <footer class="bg-background-secondary">
      <TheNavfooter />
    </footer>
  </div>
</template>

<style>
  #__layout, #__nuxt, body, html {
    height: 100%;
  }
</style>

<script>
import logo from "~/components/logo.vue";
import TheNavfooter from "~/components/NavFooter";

export default {
  // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-meta
  head() {
    return {
      titleTemplate: "%s - AlbertFoundation",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "The main page of my personal website"
        }
      ]
    };
  },
  data() {
    return {
      theme: "theme-dark"
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "theme-light" ? "theme-dark" : "theme-light";
    }
  },
  components: {
    logo,
    TheNavfooter
  }
};
</script>
