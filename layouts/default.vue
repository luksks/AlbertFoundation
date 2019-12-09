<template>
    <div class="flex flex-col w-full justify-center h-full content-center content-wrapper"
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
    import {test} from "~/components/NavBarre.vue";
    console.log(test);


    // import toggleTheme from "~/components/NavBarre.vue";


    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-meta
        data() {
            return {
                theme: test,
                // theme : '',
                // toggleTheme
        };
        },

        head() {
            return {
                titleTemplate: "%s - Albert Lanne",
                meta: [
                    {
                        hid: "description",
                        name: "description",
                        content: "My personal website"
                    }
                ]
            };
        },

        components: {NavFooter, NavBarre,test}

    };
</script>
