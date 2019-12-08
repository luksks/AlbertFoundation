<template>
    <div class="flex flex-col w-full justify-center h-full content-center "
         :class="theme">

        <!--============================== BARRE SUPERIEUR ALBERTFOUNDATION ========================================-->
        <!-- This is an example component -->

        <header class="bg-background-tertiary">
            <nav class="-mt-4 flex-wrap flex justify-between w-full  text-copy-primary pl-2 ">


                <nuxt-link to="/">

                    <picture v-if="theme === 'theme-light'">
                        <img class="m-2 fill-current stroke-current h-24 w-24 zoom"
                             src="../assets/img/logo_site_light_mod.svg"
                             title="The black version logo of my website">

                    </picture>
                    <picture v-else="theme === 'theme-light'">
                        <img class="m-2 fill-current stroke-current h-24 w-24 zoom "
                             src="../assets/img/logo_site_dark_mod.svg"
                             title="The white version logo of my website"
                        >
                    </picture>
                </nuxt-link>


                <div class="md:items-center md:w-auto flex-shrink-0">

                    <!--                    BUTTON SUPLEMENTAIRE-->
                    <!--                                            <div class="md:flex hidden">-->
                    <!--                                                <a class="block md:text-copy-primary mr-4" href="/link">Link 1</a>-->
                    <!--                                                <a class="block md:text-copy-primary mr-4" href="/link">Link 2</a>-->
                    <!--                                                <a class="block md:text-copy-primary mr-4" href="/link">Link 3</a>-->
                    <!--                                                <a class="block md:text-copy-primary mr-4" href="/link">Link 4</a>-->
                    <!--                                            </div>-->

                    <div class="mt-10 flex text-sm">
                        <a class=" p-1 ml-1 text-copy-primary font-semibold  leading-none border border-border-color-primary rounded  "
                           href="/auth/signin" @click.prevent="toggleTheme">


                            <picture v-if="theme === 'theme-light'">
                                <img
                                        class=" h-8 w-8 fill-current text-red-600 stroke-current "
                                        src="../assets/img/logo_light_mod.svg"
                                        title="Switch for the light theme"
                                >
                            </picture>
                            <picture v-else="theme === 'theme-light'">
                                <img

                                        class="fill-text-red-600 fill-current  hover:text-green-600  h-8 w-8"
                                        src="../assets/img/logo_dark_mod.svg"
                                        title="Switch for the dark theme"
                                >
                            </picture>


                        </a>

                        <a class="p-1  mr-8 ml-1 text-copy-primary font-semibold leading-none border border-border-color-primary rounded  "
                           href="ftp://92.222.224.108/">

                            <picture v-if="theme === 'theme-light'">

                                <img class=" w-8 pt-1 fill-current bg-background-tertiary stroke-current" width="27"
                                     height="27"
                                     target="_blank"
                                     title="Access to the FTP server"
                                     src="~/assets/img/BDD_light_mod.svg">

                            </picture>
                            <picture v-else="theme === 'theme-light'">


                                <img class=" w-8 pt-1 fill-current bg-background-tertiary stroke-current" width="27"
                                     height="27"
                                     target="_blank"
                                     title="Access to the FTP server"
                                     src="~/assets/img/BDD_dark_mod.svg"
                                >

                            </picture>
                        </a>
                        <!--                            <a class="p-2 ml-2 bg-teal-500 text-copy-primary font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600" href="/auth/signup">Sign up</a>-->
                    </div>
                </div>
            </nav>
        </header>


        <PhotoEtBouton></PhotoEtBouton>
        <texte-introduction></texte-introduction>  <!--component de la page index à migrer dans nuxt component-->
               <div>
                    <nuxt/>
                </div>

        <!--============================== Footer ========================================-->
        <footer class=" bg-background-tertiary  ">
            <div class="flex flex-col sm:flex-row container mx-auto text-copy-primary  flex-wrap">
                <div class="m-3 mx-12 flex justify-center">

                    <nuxt-link to="/" class="text-2xl  flex text-center">
                        Albertfoundation 📡
                    </nuxt-link>
                    <!--                    <p><a href="/"><img-->
                    <!--                            src="../assets/img/AF_logo_2.png"-->
                    <!--                            width="60"-->
                    <!--                            alt="Albert Lanne"-->
                    <!--                            class="right"/></a></p>-->
                </div>

                    <div class="w-1/4 my-3 ">
                        <p class=" mb-4 hover:text-green-600 -text-xl ">Ressources</p>
<!--                        zoom text-center  no-underline shadow-lg  border border-border-color-primary  px-3 py-2 m-2 rounded -->
                        <a href="CV_LANNE_Albert.pdf" class="sm:p-0 sm:px-0 p-1 px-3 sm:border-0 border hover:shadow-xl border-border-color-primary rounded my-2 hover:text-blue-700" download>- CV</a>
<!--                        <a href="CV_LANNE_Albert.pdf" download>Link text</a>-->
                        <!--          <p class="cursor-pointer hover:text-red-900 my-2 my-2">- Incoming</p>-->
                        <!--          <p class="cursor-pointer hover:text-red-900 my-2 my-2">- Incoming</p>-->
                        <!--          <p class="cursor-pointer hover:text-red-900 my-2 my-2">- Incoming</p>-->
                    </div>

                    <div class="w-1/4 my-3 ">
                        <p class="mb-4 hover:text-green-600 text-xl">Plus</p>
                        <button><p class="sm:p-0 sm:px-0 p-1 px-3 sm:border-0 border hover:shadow-xl border-border-color-primary rounded my-2 hover:text-blue-700" @click.prevent="toggleTheme">-
                            {{this.theme}}</p>
                        </button>
                        <!--          <p class="cursor-pointer hover:text-red-900 my-2">- Incoming</p>-->
                        <!--          <p class="cursor-pointer hover:text-red-900 my-2">- Incoming</p>-->
                        <!--          <p class="cursor-pointer hover:text-red-900 my-2">- Incoming</p>-->
                    </div>
                    <div class="w-1/4 my-3">
                        <p class="mb-4 hover:text-green-600 text-xl">Contact</p>
                        <p class="sm:p-0 sm:px-0 p-1 px-3 sm:border-0 border hover:shadow-xl border-border-color-primary rounded my-2 hover:text-blue-700">- Site map</p>
                        <!--          <p class="cursor-pointer hover:text-red-900 my-2">- Site map</p>-->
                        <!--          <p class="cursor-pointer hover:text-red-900 my-2">- Social media</p>-->
                        <!--          <p class="cursor-pointer hover:text-red-900 my-2">- Incoming</p>-->
                    </div>
                </div>
        </footer>

    </div>
</template>

<!--Permet de maintenir la hauteur à 100% pour plus avoir de blanc-->


<script>

    import texteIntroduction from  "~/components/PagePrincipale/texteIntroduction.vue";
    import PhotoEtBouton from  "~/components/PagePrincipale/PhotoEtBouton.vue";
    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-meta
        head() {
            return {
                titleTemplate: "%s - Albert Lanne",
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
        components: {texteIntroduction,PhotoEtBouton,}

    };
</script>
