<template>
  <!--  Le style pour le footer ce trouve en bas de la page -->


    <div class="flex mb-4 bg-background-secondary text-copy-primary">

      <div class="m-8 flex mx-12 ml-12 mx-24 flex">
        <p><a href="/"><img
          src="~/assets/img/AF_logo_2.png"
          width="120"
          class="right"/></a></p>
      </div>

      <div class="w-1/4  h-12 my-6 ">
        <p class=" mb-4">Ressources</p>
        <p class="text-gray-500 hover:text-red-400 my-2 my-2">- CV</p>
        <p class="text-gray-500 hover:text-red-400 my-2 my-2">- Incoming</p>
        <p class="text-gray-500 hover:text-red-400 my-2 my-2">- Incoming</p>
        <p class="text-gray-500 hover:text-red-400 my-2 my-2">- Incoming</p>
      </div>
      <div class="w-1/4  h-12 my-6 ">
        <p class="mb-4">Plus</p>
        <p class="text-gray-500 hover:text-gray-400 my-2">- Theme</p>
        <p class="text-gray-500 hover:text-red-400 my-2">- Incoming</p>
        <p class="text-gray-500 hover:text-red-400 my-2">- Incoming</p>
        <p class="text-gray-500 hover:text-red-400 my-2">- Incoming</p>
<!--        <p href="#"-->
<!--          class="text-gray-600 hover:text-gray-400 my-2"-->
<!--          @click.prevent="toggleTheme"-->
<!--        >Theme</p>-->
      </div>
      <div class="w-1/4  h-12 my-6">
        <p class="mb-4">Contact</p>
        <p class="text-gray-500 hover:text-red-400 my-2">- Incoming</p>
        <p class="text-gray-500 hover:text-red-400 my-2">- Site map</p>
        <p class="text-gray-500 hover:text-red-400 my-2">- Social media</p>
        <p class="text-gray-500 hover:text-red-400 my-2">- Incoming</p>
      </div>

  </div>
</template>

<script>

    export default {
        name: "NavFooter"
    }
</script>
