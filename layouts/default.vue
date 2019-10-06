<template>
    <div
            class=" bg-background-primary bg-premiere flex flex-col h-full content-center"
            :class="theme">

        <div class="bg-background-tertiary">
            <div class=" container mx-24 text-copy-primary m-4 md:flex-1">
                <h1 class="text-2xl hover:text-green-600 text-4xl">
                    <nuxt-link to="/">
                        Albertfoundation
                    </nuxt-link>
                </h1>
            </div>
        </div>



      <div class="container mx-auto text-copy-primary m-8 md:flex-1">

          <nuxt/>
      </div>
      <!-- incoming animated main coponent-->
      <div class="container px-64 mx-auto flex mb-4" >
        <div class="flex-1 h-12 border-blue-500 border hover:border-green-600 rounded-lg bg-background-tertiary">

       Premiere "tuile" de test
        </div>
      </div>




        <!--    FOOTER -->
        <footer class="bg-background-secondary">

            <div class="flex container mx-auto text-copy-primary">
                <div class="m-3 flex mx-12 flex">
                    <p><a href="/"><img
                            src="~/assets/img/AF_logo_2.png"
                            width="60"
                            class="right"/></a></p>
                </div>


                <div class="w-1/4 my-3 ">
                    <p class=" mb-4 hover:text-green-600 text-xl">Ressources</p>
                    <p class="hover:text-red-900 my-2">- CV</p>
                    <!--          <p class="hover:text-red-900 my-2 my-2">- Incoming</p>-->
                    <!--          <p class="hover:text-red-900 my-2 my-2">- Incoming</p>-->
                    <!--          <p class="hover:text-red-900 my-2 my-2">- Incoming</p>-->
                </div>

                <div class="w-1/4 my-3 ">
                    <p class="mb-4 hover:text-green-600 text-xl">Plus</p>
                    <p class="hover:text-green-500 my-2" @click.prevent="toggleTheme">- {{this.theme}}</p>
                    <!--          <p class="hover:text-red-900 my-2">- Incoming</p>-->
                    <!--          <p class="hover:text-red-900 my-2">- Incoming</p>-->
                    <!--          <p class="hover:text-red-900 my-2">- Incoming</p>-->
                </div>
                <div class="w-1/4 my-3">
                    <p class="mb-4 hover:text-green-600 text-xl">Contact</p>
                    <p class="hover:text-red-900 my-2">- Site map</p>
                    <!--          <p class="hover:text-red-900 my-2">- Site map</p>-->
                    <!--          <p class="hover:text-red-900 my-2">- Social media</p>-->
                    <!--          <p class="hover:text-red-900 my-2">- Incoming</p>-->
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
