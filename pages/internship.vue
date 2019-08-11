<template>
  <body class="bg-mycolor">

  <div>

  <nuxt-link to="/" class="button--one zoom">
    Return to homepage
  </nuxt-link>

    <p class="title">Under construction </p>
    <p class="subtitle"> but, it can be a good meme</p>
</div>


  </body>
</template>

<script>
    export default {
        name: "internship"
    }
</script>

<style>
  .parallax {
    /* The image used */
    background-image: url("../assets/img/indexImageArtstation.png");

    /* Set a specific height */
    height: 500px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

