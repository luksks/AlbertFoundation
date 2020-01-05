<template>

    <div class=" bg-background-primary min-h-screen flex flex-col w-full justify-center h-full content-center content-wrapper"
         :class="theme">
        <div class="flex-grow ">
            <paper></paper>

<!--                        <UnderConstruction></UnderConstruction>-->
<!--                                <CookiePopUp/>-->
<!--                                <privacyPolicy/>-->
            <NavBarre/>
            <nuxt/>
        </div>


        <div class="BackgroundIndex5 relative">
        <NavFooter/>
        </div>

    </div>
</template>


<script>

    import NavFooter from "~/components/NavFooter.vue";
    import NavBarre from "~/components/NavBarre.vue";

    import CookiePopUp from "~/components/SpecialComponents/cookies_PopUp.vue";
    import UnderConstruction from "~/components/SpecialComponents/UnderConstruction.vue";
    import privacyPolicy from "~/components/SpecialComponents/privacy_PopUp.vue";
    import paper from "~/components/SpecialComponents/grain_effect.vue";


    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-meta
        data() {
            return {
                theme: "theme-dark",
            };
        },
        // computed:{
        //     theme(){
        //         return this.$store.state.localStorage.theme;
        //     }
        // },
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

        components: {NavFooter, NavBarre, CookiePopUp, privacyPolicy, UnderConstruction, paper,}

    };
</script>
<style>
    .BackgroundIndex5{
        z-index: 5; /* put .green-box above .dashed-box */
    }


</style>
