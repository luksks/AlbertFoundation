<template>
  <div class="ArrierePlan">
      <div class="container">
        <div class="flex flex-col h-full">
        <nuxt/>


      <main class="pt-24">
        <logo/>
      </main>

      <footer>

        <TheNavfooter/>

      </footer>

      </div>

    </div>
  </div>


</template>

<script>
    import Logo from '~/components/Logo.vue'
    import TheNavfooter from '~/components/NavFooter'

    export default {
        components: {
            Logo,
            TheNavfooter

        }
    }
</script>


<style>

  .ArrierePlan {
    background-color:#211426;
  }

  html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
    color : #f2cd27;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--one {
  display: inline-block;
  border-radius: 40px;
  border: 1px solid #F25CCA;
  color: #F25CCA;
  text-decoration: none;
  padding: 15px 30px;
  margin-left: 50px;
}

.button--one:hover {
  color: #F2B441;
  background-color: #211426;
  border: 1px solid #F2B441;
}

  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #e2e8f0;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #fff;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

</style>
