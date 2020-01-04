<template>
    <div class=" flex flex-col  items-center flex-wrap  pt-8 animated fade-in">
        <div class=" p-6 autre rounded-lg text-justify justify-around items-center w-5/6 md:w-1/2 mx-auto  pb-8 md:pb-0">

            <a class="text-xl md:text-2xl   text-copy-primary  mb-2 hover:text-green-600">
                Hello !
            </a>
            <a class="  md:text-lg text-justify leading-normal text-copy-primary hover:text-copy-secondary">
                My name is Albert, I am 20 years old and passionate about computer science. Initially with a
                professional baccalaureate in the military French Navy telecommunication. Now I study the c++ and
                network communication. Currently, in the second year of the national diploma in informatics science,
                I work a lot on my Github account on desktop applications made in c++. On my free time, I'm training
                to practice my DevOps skills with my servers and my website.
                <br><br>
            </a>

        </div>

    </div>
</template>

<script>
    export default {
        name: "texteintroduction"
    }
</script>

<style scoped>

    .autre {
        background-color: rgba(0, 0, 0, 0.8);  /* 50% transparent */



    }
</style>
