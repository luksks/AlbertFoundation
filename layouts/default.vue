<template>
  <div class="ArrierePlan">

    <div class="container">
      <div class="flex flex-col h-full">
        <nuxt/>
        <logo/>
        <footer>
          <TheNavfooter/>
        </footer>
      </div>
    </div>
  </div>


<!--  <template>-->
<!--    <div class="container ArrierePlan">-->
<!--      <nuxt/>-->
<!--    </div>-->
<!--  </template>-->


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
