<template>
    <header class="flex items-center justify-between bg-background-tertiary">
        <!--        Div pour les élément de gauche-->

        <nuxt-link to="/" class="px-4">
            <picture v-if="theme === 'theme-light'">
                <img class=" fill-current stroke-current h-24 w-24 zoom"
                     src="../assets/img/logo_site_light_mod.svg"
                     alt="The black version logo of my website"
                     title="The black version logo of my website">
            </picture>
            <picture v-else>
                <img class="-pt-8  fill-current stroke-current h-24 w-24 zoom "
                     src="../assets/img/logo_site_dark_mod.svg"
                     title="The white version logo of my website"
                     alt="The white version logo of my website"
                >
            </picture>
        </nuxt-link>


        <!--        Div pour les élément de droite-->
        <div class="flex justify-end">
            <nuxt-link to="/aboutWebsite" class="mx-2">
                <a href="#"
                   class="inline-block text-sm px-2 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-copy-secondary hover:bg-white mt-4 lg:mt-0">
                    About the website</a>
            </nuxt-link>


            <picture @click.prevent="toggleTheme" class="mx-2 mr-6" v-if="theme === 'theme-light'">
                <img
                        class=" h-8 w-8 fill-current fill-text-red-600 hover:text-green-600"
                        src="../assets/img/logo_light_mod.svg"
                        title="Switch for the light theme"
                        alt="button light theme ">
            </picture>
            <picture @click.prevent="toggleTheme" class="mx-2 mr-6" v-else>
                <img
                        class="h-8 w-8  fill-current fill-text-red-600 hover:text-green-600  "
                        src="../assets/img/logo_dark_mod.svg"
                        alt="theme dark button"
                        title=" dark for the theme">
            </picture>
        </div>

    </header>
</template>

<script>
    import analytics from "~/pages/privacy.vue"
    import aboutWebsite from "~/pages/aboutWebsite.vue"


    export let test = 'test';
    export default {
        name: "NavBarre",
        data() {
            return {
                theme: "theme-dark"

            };
        },
        components: {aboutWebsite, analytics},

        methods: {
            toggleTheme() {
                let lol = this.theme = this.theme === "theme-light" ? "theme-dark" : "theme-light";

                if (typeof window !== 'undefined') {
                    localStorage.setItem('theme', this.theme)
                }

            }
        },
        created() {
            if (typeof window !== 'undefined') {
                this.theme = localStorage.getItem('theme') || 'theme-light'
            }

        },
    }

</script>

<style scoped>

</style>
