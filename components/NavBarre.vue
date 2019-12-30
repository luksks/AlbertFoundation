<template>
    <header class="flex flex-wrap items-center justify-between bg-background-tertiary">

        <nuxt-link to="/" class="px-6 ">
                <img class="-pt-8  fill-current stroke-current sm:h-26 sm:w-26 h-24 w-24 zoom "
                     src="../assets/img/logo_site_dark_mod.svg"
                     title="The white version logo of my website"
                     alt="The white version logo of my website">
        </nuxt-link>

        <!--        Div pour les élément de droite-->
        <div class="align-baseline flex justify-end  text-copy-primary">
            <nuxt-link to="/presentation"
                       class="button zoom hover:text-purple-700 ">
                Presentation
            </nuxt-link>

<!--            <nuxt-link to="/timeline"-->
<!--                       class="button zoom hover:text-pink-700">-->
<!--                Timeline-->
<!--            </nuxt-link>-->
            <nuxt-link to="/aboutWebsite"
                       class="button zoom hover:text-green-700  text-sm sm:text-base">
                About the website
            </nuxt-link>

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
        </div>


    </header>


</template>

<script>
    import analytics from "~/pages/privacy.vue"
    import aboutWebsite from "~/pages/aboutWebsite.vue"

    export default {
        name: "NavBarre",
        components: {aboutWebsite, analytics,},
    }

</script>

<style scoped>

</style>
