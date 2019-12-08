<template>
    <div class="flex flex-col w-full justify-center h-full content-center "
         :class="theme">


        <NavBarre/>

        <div>
            <nuxt/>
        </div>

        <NavFooter/>

    </div>
</template>

<!--Permet de maintenir la hauteur à 100% pour plus avoir de blanc-->


<script>

    import NavFooter from "~/components/NavFooter.vue";
    import NavBarre from "~/components/NavBarre.vue";

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
        components: {NavFooter, NavBarre}

    };
</script>
