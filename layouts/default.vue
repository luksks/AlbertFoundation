<template>
  <div
    class=" bg-background-primary bg-premiere flex flex-col h-full content-center"
    :class="theme">

    <div class="bg-background-tertiary">
      <div class=" container mx-16 text-copy-primary m-8 md:flex-1">
      <h1>
        <nuxt-link to="/">
          Albertfoundation
        </nuxt-link>
      </h1>
    </div>
    </div>

    <div class="container mx-auto text-copy-primary m-8 md:flex-1">
      <div class="flex flex-col h-full content-center w-full">
        <nuxt/>
      </div>
    </div>


<!--    FOOTER -->
    <footer class="bg-background-secondary">

      <div class="flex mb-4 container mx-auto text-copy-primary">

        <div class="m-8 flex mx-12 ml-12 mx-24 flex">
          <p><a href="/"><img
                  src="~/assets/img/AF_logo_2.png"
                  width="120"
                  class="right"/></a></p>
        </div>

        <div class="w-1/4 my-6 ">
          <p class=" mb-4">Ressources</p>
          <p class="hover:text-red-400 my-2 my-2">- CV</p>
          <p class="hover:text-red-400 my-2 my-2">- Incoming</p>
          <p class="hover:text-red-400 my-2 my-2">- Incoming</p>
          <p class="hover:text-red-400 my-2 my-2">- Incoming</p>
        </div>

        <div class="w-1/4 my-6 ">
          <p class="mb-4">Plus</p>
          <p class="hover:text-gray-400 my-2" @click.prevent="toggleTheme">- Theme</p>
          <p class="hover:text-red-400 my-2">- Incoming</p>
          <p class="hover:text-red-400 my-2">- Incoming</p>
          <p class="hover:text-red-400 my-2">- Incoming</p>
        </div>
        <div class="w-1/4 my-6">
          <p class="mb-4">Contact</p>
          <p class="hover:text-red-400 my-2">- Incoming</p>
          <p class="hover:text-red-400 my-2">- Site map</p>
          <p class="hover:text-red-400 my-2">- Social media</p>
          <p class="hover:text-red-400 my-2">- Incoming</p>
        </div>

      </div>
    </footer>
  </div>
</template>
<!--Permet de maintenir la hauteur à 100% pour plus avoir de blanc-->
<style>
  #__layout, #__nuxt, body, html {
    height: 100%;
  }
</style>

<script>
import logo from "~/components/Navlogo.vue";


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

  }
};
</script>
