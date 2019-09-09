<template>
  <div class="justify-center px-3 mt-12 my-12 flex flex-wrap flex-col md:flex-row items-center h-banner">

     <Logo />
    <barre />
  </div>
</template>

<script>
import barre from "~/components/NavButtonBar.vue";
import Logo from "~/components/logo.vue";

export default {
  // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
  head() {
    return {
      title: "MainPage - AlbertFoundation"
    };
  },
  components: {
    barre,
    Logo
  }
};
</script>
