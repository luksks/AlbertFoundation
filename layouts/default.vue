<template>

    <div class=" flex flex-col w-full justify-center h-full content-center content-wrapper"
         :class="theme">
<paper></paper>
        <CookiePopUp/>
        <privacyPolicy/>

        <NavBarre/>
        <nuxt/>
        <NavFooter/>
    </div>
</template>


<script>

    import NavFooter from "~/components/NavFooter.vue";
    import NavBarre, {test} from "~/components/NavBarre.vue";

    import CookiePopUp from "~/components/SpecialComponents/cookies_PopUp.vue";
    import privacyPolicy from "~/components/SpecialComponents/privacy_PopUp.vue";
    import paper from "~/components/SpecialComponents/grain_effect.vue";
    import {theme} from "../components/classe.js";

    console.log(test);


    // import toggleTheme from "~/components/NavBarre.vue";


    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-meta
        data() {
            return {

                // C'est cette valeur que j'aimerais changer entre theme-light et theme-dark
                theme: 'theme-dark',

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

        components: {theme, NavFooter, NavBarre, CookiePopUp, privacyPolicy, paper,test}

    };
</script>
