<template>
  <!--  Le style pour le footer ce trouve en bas de la page -->


    <div class="flex mb-4 bg-background-secondary">
      <div class="flex mx-12 flex">
        <p><a href="/" target="_blank"><img
          src="~/assets/img/AF_logo_2.png"
          width="210"
          alt="Mon Github"
          class="right"/></a></p>
      </div>
      <div class="w-1/4  h-12 ">
        <p>Ressources</p>

      </div>
      <div class="w-1/4  h-12">
        <p>Plus</p>
        <p class="text-gray-600 hover:text-gray-400">Theme</p>
<!--        <p href="#"-->
<!--          class="text-gray-800 hover:text-gray-600"-->
<!--          @click.prevent="toggleTheme"-->
<!--        >Theme</p>-->
      </div>
      <div class="w-1/4  h-12">
        <p>Contact</p>
      </div>

  </div>
</template>

<script>


    export default {
        name: "NavFooter"
    }
</script>
