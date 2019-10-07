<template>
    <section class="flex flex-col flex-wrap items-center bg-background-primary pt-8 animated fade-in">
        <div class="justify-around items-center w-5/6 md:w-1/2 mx-auto pb-8 md:pb-0">
            <p class="text-xl md:text-2xl   text-copy-primary  mb-2 hover:text-green-600">
                Hey you!
            </p>
            <p class="text-base md:text-lg text-copy-primary leading-normal">
                I'm <span class="text-copy-primary" v-text="'Alex'" />, a guy in his twenties living in
                <span class="text-copy-primary" v-text="'Dresden, Germany'" />. Already at young age, computers impressed me
                so much that I wanted to know more about them. Now, I'm a self-taught developer who runs his
                <span class="text-copy-primary" v-text="'own company'" /> and studies CS in the meantime.
                <br><br>
                When developing web apps, I mostly rely on the <span class="text-copy-primary" v-text="'Laravel'" />
                framework for the backend.
                In terms of frontend, <span class="text-copy-primary" v-text="'Nuxt.js'" /> is my favorite choice,
                often in combination with a great CSS framework called <span class="text-copy-primary" v-text="'TailwindCSS'" />.
                <br><br>
                Can't see parts of your tech-stack on that list? <span class="text-copy-primary" v-text="'Don\'t worry!'" />
                I use the appropriate tech stack that fits the project's specifications and requirements.
            </p>
        </div>

    </section>
</template>

<script>
    export default {
        name: "AboutMe"
    }
</script>

<style scoped>

</style>
