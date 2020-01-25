<template>
    <div class="text-copy-primary flex w-full flex-wrap items-center  bg-background-primary">
    <p class="text-xl m-6  ">Chart</p>
        <div class="Chart w-full flex">
            <h1 style="">Linechart</h1>
            <line-example/>
        </div>
        <p>test</p>



    </div>
</template>

<script>
    import LineExample from '../components/chart/LineExample'


    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
        head() {
            return {
                title: "Chart page"
            };
        },
        components: {LineExample,}

    };
</script>

<style scoped>

</style>
