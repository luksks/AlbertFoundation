<template >


    <div class="container">
      <div class="flex flex-col h-full">
        <nuxt/>
        <footer>
          <TheNavfooter/>
        </footer>
      </div>
    </div>


</template>


<script>

    import Logo from '~/components/Logo.vue'
    import TheNavfooter from '~/components/NavFooter'

    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-meta
        head() {
            return {
                titleTemplate: '%s - AlbertFoundation',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content:
                            'The main page of my personal website'
                    }
                ]
            }
        },
        components: {
            Logo,
            TheNavfooter

        }
    }
</script>
