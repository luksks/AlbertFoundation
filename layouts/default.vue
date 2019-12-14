<template>
    <div class="flex flex-col w-full justify-center h-full content-center content-wrapper"
         :class="theme">


        <CookiePopUp/>
        <privacyPolicy/>
        <NavBarre/>

            <nuxt/>

        <NavFooter/>

    </div>
</template>

<!--Permet de maintenir la hauteur à 100% pour plus avoir de blanc-->

<script>

    import NavFooter from "~/components/NavFooter.vue";
    import NavBarre, {test} from "~/components/NavBarre.vue";
    import CookiePopUp from "~/components/cookies_PopUp.vue";
    import privacyPolicy from "~/components/privacy_PopUp.vue";

    console.log(test);


    // import toggleTheme from "~/components/NavBarre.vue";


    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-meta
        data() {
            return {
                theme: 'theme-dark  ',
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

        components: {NavFooter, NavBarre, CookiePopUp,privacyPolicy, test}

    };
</script>
