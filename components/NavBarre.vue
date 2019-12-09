<template>
    <header class="bg-background-tertiary">
        <nav class="flex-wrap flex-shrink-1 align-baseline flex justify-between w-full  text-copy-primary pl-2 ">


            <nuxt-link to="/" class="-mt-1 mx-3">
                <picture v-if="theme === 'theme-light'">
                    <img class=" fill-current stroke-current h-24 w-24 zoom"
                         src="../assets/img/logo_site_light_mod.svg"
                         title="The black version logo of my website">
                </picture>
                <picture v-else="theme === 'theme-light'">
                    <img class="-pt-8  fill-current stroke-current h-24 w-24 zoom "
                         src="../assets/img/logo_site_dark_mod.svg"
                         title="The white version logo of my website"
                    >
                </picture>
            </nuxt-link>


            <div class="text-copy-primary hover:bg-blue-700 font-bold py-2 px-4 rounded-full sm:justify-center">
                <a class="text-copy-primary"
                   href="/auth/signin" @click.prevent="toggleTheme">

                    <p> About the website</p>

                </a>

                    <a class="text-copy-primary hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
                       href="/auth/signin" @click.prevent="toggleTheme">

                        <p> Privacy Policy </p>

                    </a>


                <a class="flex  p-1 ml-1 text-copy-primary font-semibold  leading-none rounded  "
                   href="/auth/signin" @click.prevent="toggleTheme">
                    <picture v-if="theme === 'theme-light'">
                        <img
                                class=" h-8 w-8 fill-current text-red-600 stroke-current "
                                src="../assets/img/logo_light_mod.svg"
                                title="Switch for the light theme">
                    </picture>
                    <picture v-else="theme === 'theme-light'">
                        <img
                                class="fill-text-red-600 fill-current  hover:text-green-600  h-8 w-8"
                                src="../assets/img/logo_dark_mod.svg"
                                title="Switch for the dark theme">
                    </picture>
                </a>


            </div>
        </nav>
    </header>
</template>

<script>
    export let test = 'test';
    export default {
        name: "NavBarre",
        data() {
            return {
                theme: "theme-dark"

            };
        },

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
