<template>
    <!--
        <div>
            <div class="z-40  w-full flex  items-center ">
                <div class="h-full w-full flex-wrap sm:mt-0 relative h-full items-stretch justify-center flex">
                    <div class="w-full h-full justify-between flex">
                        <div class="justify-start">
                            <img class="fill-current stroke-current
                            xl:w-full lg:w-full md:w-64 sm:w-48 w-32 h-full -m-1"
                                 src="../assets/img/pitchumi_gauche.svg"
                                 title="Reduction - Free shipping"
                                 alt="Pitchumi store">
                        </div>
                        <div class="items-end justify-center flex flex-wrap">

                            <img class="fill-current stroke-current flex
                            xl:w-full lg:w-full md:w-64 sm:w-48 w-32"
                                 src="../assets/img/pitchumi_milieu.svg"
                                 title="Free delivery on all purchases"
                                 alt="Pitchumi stores">
                        </div>
                        <div class="justify-end flex">
                            <div class="justify-end flex absolute pointer-events-none items-start mx-auto ">
                                <div class=" relative sm:mx-8 sm:px-12 mx-2 px-4">
                                    <img style="background-color:#db3332;" class="p-2 xl:pt-8 md:pt-6 sm:pt-4 xl:pt-2 pt-2
                                     rounded-b-lg fill-current stroke-current flex  h-full
                            xl:w-12 lg:w-12 md:w-12 sm:w-8 w-8 "
                                         src="../assets/img/logo_checkout.svg"
                                         title="Cart"
                                         alt="Cart">
                                </div>
                            </div>
                            <img class="fill-current stroke-current
                            xl:w-full lg:w-full md:w-64 sm:w-48 w-32 h-full"
                                 src="../assets/img/pitchumi_droite.svg"
                                 title="Pitchumi Workshop at Paris"
                                 alt=" Fashion & accessories">
                        </div>
                    </div>

                    <div class="absolute pointer-events-none">
                        <div class="object-center items-center w-full items-center  flex-grow text-center">
                            <a href="/">
                                <svg class="xl:w-56 lg:w-48 md:w-48 sm:w-32 w-24 h-full"
                                     xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 342.19 126.66">
                                    <text transform="matrix(.99 0 0 1 0 103.24)" font-size="115.36" fill="#d31313"
                                          font-family="KenyanCoffeeRg-Italic,Kenyan Coffee" font-style="italic">PITCHUMI
                                    </text>
                                </svg>
                            </a>
                        </div>

                    </div>

                </div>


            </div>
        </div>
        -->
            <header class=" flex flex-wrap items-center justify-between bg-background-tertiary
        ">
                        <nuxt-link to="/" class="sm:px-6 sm:mx-0 mx-auto BackgroundIndex5">
                            <img class="-pt-8  fill-current stroke-current sm:h-26 sm:w-26 h-24 w-24 zoom  "
                                 src="../assets/img/logo_site_dark_mod.svg"
                                 title="The white version logo of my website"
                                 alt="The white version logo of my website">
                        </nuxt-link>
        <!---->
                <!--        Div pour les élément de droite-->

                <!--        flex -mt-3 m-3 text-copy-primary mt-4 flex-wrap  justify-center-->
                <div class="items-center align-baseline flex flex-wrap sm:justify-end justify-center text-copy-primary sm:mx-0 mx-auto">
                    <!--        <div class="flex -mt-3 m-3 text-copy-primary mt-4 flex-wrap  justify-center">-->



                    <nuxt-link to="/projectBTS"
                               class="button zoom hover:text-green-700  text-sm sm:text-base ">
                        BTS
                    </nuxt-link>



                    <nuxt-link to="/timeline"
                               class="button zoom hover:text-pink-700 BackgroundIndex5">
                        Timeline
                    </nuxt-link>
                    <nuxt-link to="/presentation"
                               class=" button zoom hover:text-purple-700 BackgroundIndex5">
                        Presentation
                    </nuxt-link>

                    <nuxt-link to="/aboutWebsite"
                               class="button zoom hover:text-green-700  text-sm sm:text-base BackgroundIndex5">
                        About the website
                    </nuxt-link>


                </div>


                <!--            Pour changer le theme-->
                <!--            <picture @click="$store.commit('localStorage/changetheme')" class="mx-2 mr-6 cursor-pointer"-->
                <!--                     v-if="$store.state.localStorage.theme === 'theme-light'">-->
                <!--                <img-->
                <!--                        class=" h-8 w-8 fill-current fill-text-red-600 hover:text-green-600"-->
                <!--                        src="../assets/img/logo_light_mod.svg"-->
                <!--                        title="Switch for the light theme"-->
                <!--                        alt="button light theme ">-->
                <!--            </picture>-->
                <!--            <picture @click="$store.commit('localStorage/changetheme')" class="mx-2 mr-6 cursor-pointer" v-else>-->
                <!--                <img-->
                <!--                        class="h-8 w-8  fill-current fill-text-red-600 hover:text-green-600  "-->
                <!--                        src="../assets/img/logo_dark_mod.svg"-->
                <!--                        alt="theme dark button"-->
                <!--                        title=" dark for the theme">-->
                <!--            </picture>-->


            </header>


</template>

<script>
    import analytics from "~/pages/privacy.vue"
    import aboutWebsite from "~/pages/aboutWebsite.vue"


    export default {
        name: "NavBarre",
        components: {aboutWebsite, analytics},
    }

</script>

<style>

    audio::-webkit-media-controls-timeline,
    video::-webkit-media-controls-timeline {
        display: none;
    }

    audio::-webkit-media-controls,
    video::-webkit-media-controls {
        display: none;
    }

</style>
