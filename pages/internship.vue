<template>
  <body class="bg-mycolor">
  <div>
    <div class ="flex h-full w-full justify-center">


      <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48 ">
        <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
      </svg>

    </div>

    <p>

      <nuxt-link to="/" class="my-12 mx-24 button h-full  zoom justify-center ">
        Return to homepage
      </nuxt-link>
    </p>

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

