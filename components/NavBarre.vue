<template>
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
