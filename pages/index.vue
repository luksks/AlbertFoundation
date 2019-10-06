<template>
  <div>

     <Logo />
    <barre />
  </div>
</template>

<script>
import barre from "~/components/NavButtonBar.vue";
import Logo from "~/components/Navlogo.vue";

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
