<template>
    <header class="flex items-center justify-between bg-background-tertiary">


        <nuxt-link to="/" class="px-4 ">
            <picture v-if="this.$store.state.theme === 'theme-light'">
                <img class=" fill-current stroke-current h-24 w-24 zoom"
                     src="../assets/img/logo_site_light_mod.svg"
                     alt="The black version logo of my website"
                     title="The black version logo of my website">
            </picture>
            <picture v-else>
                <img class="-pt-8  fill-current stroke-current h-24 w-24 zoom "
                     src="../assets/img/logo_site_dark_mod.svg"
                     title="The white version logo of my website"
                     alt="The white version logo of my website">
            </picture>
        </nuxt-link>

        <!--        Div pour les élément de droite-->
        <div class="flex justify-end">
            <nuxt-link to="/aboutWebsite" class="mx-2">
                <a href="#"
                   class="inline-block text-sm px-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-copy-secondary hover:bg-white mt-4 lg:mt-0">
                    About the website</a>
            </nuxt-link>



<!--            Pour changer le theme-->
<!--            <picture @click.prevent="toggleTheme" class="mx-2 mr-6 cursor-pointer" v-if="this.$store.state.theme === 'theme-light'">-->
<!--                <img-->
<!--                        class=" h-8 w-8 fill-current fill-text-red-600 hover:text-green-600"-->
<!--                        src="../assets/img/logo_light_mod.svg"-->
<!--                        title="Switch for the light theme"-->
<!--                        alt="button light theme ">-->
<!--            </picture>-->
<!--            <picture @click.prevent="toggleTheme" class="mx-2 mr-6 cursor-pointer" v-else>-->
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
