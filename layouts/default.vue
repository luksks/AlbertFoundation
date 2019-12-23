<template>

    <div class=" flex flex-col w-full justify-center h-full content-center content-wrapper"
         :class="this.$store.state.localStorage.theme">

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
    import NavBarre from "~/components/NavBarre.vue";

    import CookiePopUp from "~/components/SpecialComponents/cookies_PopUp.vue";
    import privacyPolicy from "~/components/SpecialComponents/privacy_PopUp.vue";
    import paper from "~/components/SpecialComponents/grain_effect.vue";


    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-meta
        // data() {
        //     return {
        //         theme: this.$store.state.theme,
        //     };
        // },
        computed:{
            theme(){
                return this.$store.state.localStorage.theme;
            }
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

        components: {NavFooter, NavBarre, CookiePopUp, privacyPolicy, paper, }

    };
</script>
