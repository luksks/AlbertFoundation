<template>

</template>

<script>
    export default {
        name: "Timeline"
    }
</script>


<style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 14px;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        flex-direction: column;
    }



    .timeline {
        width: 100%;
        background-color: #fff;
        box-shadow: 0 5px 25px 5px rgba(0, 0, 0, .2);
    }
    .timeline .swiper-container {
        height: 100vh;
        width: 100%;
        position: relative;
    }
    .timeline .swiper-wrapper {
        transition: 2s cubic-bezier(0.68, -0.4, 0.27, 1.34) 0.2s;
    }
    .timeline .swiper-slide {
        position: relative;
        color: #fff;
        overflow: hidden;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;

    }
    .timeline .swiper-slide::after {
        content: "";
        position: absolute;
        z-index: 1;
        right: -115%;
        bottom: -10%;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .7);
        box-shadow: -230px 0 150px 60vw rgba(0, 0, 0, .7);
        border-radius: 100%;
    }
    .timeline .swiper-slide-content {
        position: absolute;
        text-align: center;
        width: 80%;
        max-width: 310px;
        right: 50%;
        top: 13%;
        transform: translate(50%, 0);
        font-size: 12px;
        z-index: 2;
    }
    .timeline .swiper-slide .timeline-year {
        display: block;
        font-size: 22px !important;
        margin-bottom: 50px;
        transform: translate3d(20px, 0, 0);
        color: orange;
        font-style: italic;
        font-weight: 300;
        opacity: 0;
        transition: 0.2s ease 0.4s;
    }
    .timeline .swiper-slide .timeline-title {
        font-weight: 800;
        font-size: 54px !important;
        margin: 0 0 30px;
        opacity: 0;
        transform: translate3d(20px, 0, 0);
        transition: 0.2s ease 0.5s;
    }
    .timeline .swiper-slide .timeline-text {
        line-height: 1.8;
        opacity: 0;
        transform: translate3d(20px, 0, 0);
        transition: 0.2s ease 0.6s;
        font-size: 14px;
    }
    .timeline .swiper-slide-active .timeline-year {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: 0.4s ease 1.6s;

    }
    .timeline .swiper-slide-active .timeline-title {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: 0.4s ease 1.7s;
    }
    .timeline .swiper-slide-active .timeline-text {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: 0.4s ease 1.8s;
    }
    .timeline .swiper-pagination {
        right: 15% !important;
        height: 100%;
        display: none;
        flex-direction: column;
        justify-content: center;
        font-style: italic;
        font-weight: 300;
        font-size: 18px;
        z-index: 1;
    }
    .timeline .swiper-pagination::before {
        content: "";
        position: absolute;
        left: -30px;
        top: 0;
        height: 100%;
        width: 1px;
        background-color: rgba(255, 255, 255, .2);
    }
    .timeline .swiper-pagination-bullet {
        width: auto;
        height: auto;
        text-align: center;
        opacity: 1;
        background: transparent;
        color: #d4a024;
        margin: 15px 0 !important;
        position: relative;
    }
    .timeline .swiper-pagination-bullet::before {
        content: "";
        position: absolute;
        top: 8px;
        left: -32.5px;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: #d4a024;
        transform: scale(0);
        transition: 0.2s;
    }
    .timeline .swiper-pagination-bullet-active {
        color: #d4a024;
    }
    .timeline .swiper-pagination-bullet-active::before {
        transform: scale(1);
    }
    .timeline .swiper-button-next, .timeline .swiper-button-prev {
        background-size: 20px 20px;
        top: 15%;
        width: 20px;
        height: 20px;
        margin-top: 0;
        z-index: 2;
        transition: 0.2s;
    }
    .timeline .swiper-button-prev {
        left: 8%;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23d4a024'%2F%3E%3C%2Fsvg%3E");
    }
    .timeline .swiper-button-prev:hover {
        transform: translateX(-3px);
    }
    .timeline .swiper-button-next {
        right: 8%;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23d4a024'%2F%3E%3C%2Fsvg%3E");
    }
    .timeline .swiper-button-next:hover {
        transform: translateX(3px);
    }
    @media screen and (min-width: 768px) {
        .timeline .swiper-slide::after {
            right: -30%;
            bottom: -8%;
            width: 240px;
            height: 50%;
            box-shadow: -230px 0 150px 50vw rgba(0, 0, 0, .7);
        }
        .timeline .swiper-slide-content {
            right: 30%;
            top: 50%;
            transform: translateY(-50%);
            width: 310px;
            font-size: 11px;
            text-align: right;
        }
        .timeline .swiper-slide .timeline-year {
            margin-bottom: 0;
            font-size: 32px;
        }
        .timeline .swiper-slide .timeline-title {
            font-size: 46px;
            margin: 0;
        }
        .timeline .swiper-pagination {
            display: flex;
        }
        .timeline .swiper-button-prev {
            top: 15%;
            left: auto;
            right: 15%;
            transform: rotate(90deg) translate(0, 10px);
        }
        .timeline .swiper-button-prev:hover {
            transform: rotate(90deg) translate(-3px, 10px);
        }
        .timeline .swiper-button-next {
            top: auto;
            bottom: 15%;
            right: 15%;
            transform: rotate(90deg) translate(0, 10px);
        }
        .timeline .swiper-button-next:hover {
            transform: rotate(90deg) translate(3px, 10px);
        }
    }
    @media screen and (min-width: 1024px) {
        .timeline .swiper-slide::after {
            right: -20%;
            bottom: -12%;
            width: 240px;
            height: 50%;
            box-shadow: -230px 0 150px 39vw rgba(0, 0, 0, .7);
        }
        .timeline .swiper-slide-content {
            right: 25%;
        }
    }

</style>

<!--<div class="timeline">-->
<!--    <div class="container left">-->
<!--        <div class="content">-->
<!--            <h2>2017</h2>-->
<!--            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="container right">-->
<!--        <div class="content">-->
<!--            <h2>2016</h2>-->
<!--            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="container left">-->
<!--        <div class="content">-->
<!--            <h2>2015</h2>-->
<!--            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="container right">-->
<!--        <div class="content">-->
<!--            <h2>2012</h2>-->
<!--            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="container left">-->
<!--        <div class="content">-->
<!--            <h2>2011</h2>-->
<!--            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>-->
<!--        </div>-->
<!--    </div>-->
<!--    <div class="container right">-->
<!--        <div class="content">-->
<!--            <h2>2007</h2>-->
<!--            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>-->
<!--        </div>-->
<!--    </div>-->
<!--</div>-->
























<!--* {-->
<!--box-sizing: border-box;-->
<!--}-->

<!--body {-->
<!--background-color: #474e5d;-->
<!--font-family: Helvetica, sans-serif;-->
<!--}-->

<!--/* The actual timeline (the vertical ruler) */-->
<!--.timeline {-->
<!--position: relative;-->
<!--max-width: 1200px;-->
<!--margin: 0 auto;-->
<!--}-->

<!--/* The actual timeline (the vertical ruler) */-->
<!--.timeline::after {-->
<!--content: '';-->
<!--position: absolute;-->
<!--width: 6px;-->
<!--background-color: white;-->
<!--top: 0;-->
<!--bottom: 0;-->
<!--left: 50%;-->
<!--margin-left: -3px;-->
<!--}-->

<!--/* Container around content */-->
<!--.container {-->
<!--padding: 10px 40px;-->
<!--position: relative;-->
<!--background-color: inherit;-->
<!--width: 50%;-->
<!--}-->

<!--/* The circles on the timeline */-->
<!--.container::after {-->
<!--content: '';-->
<!--position: absolute;-->
<!--width: 25px;-->
<!--height: 25px;-->
<!--right: -12px;-->
<!--background-color: white;-->
<!--border: 4px solid #FF9F55;-->
<!--top: 15px;-->
<!--border-radius: 50%;-->
<!--z-index: 1;-->
<!--}-->

<!--/* Place the container to the left */-->
<!--.left {-->
<!--left: 0;-->
<!--}-->

<!--/* Place the container to the right */-->
<!--.right {-->
<!--left: 50%;-->
<!--}-->

<!--/* Add arrows to the left container (pointing right) */-->
<!--.left::before {-->
<!--content: " ";-->
<!--height: 0;-->
<!--position: absolute;-->
<!--top: 22px;-->
<!--width: 0;-->
<!--z-index: 1;-->
<!--right: 30px;-->
<!--border: medium solid white;-->
<!--border-width: 10px 0 10px 10px;-->
<!--border-color: transparent transparent transparent white;-->
<!--}-->

<!--/* Add arrows to the right container (pointing left) */-->
<!--.right::before {-->
<!--content: " ";-->
<!--height: 0;-->
<!--position: absolute;-->
<!--top: 22px;-->
<!--width: 0;-->
<!--z-index: 1;-->
<!--left: 30px;-->
<!--border: medium solid white;-->
<!--border-width: 10px 10px 10px 0;-->
<!--border-color: transparent white transparent transparent;-->
<!--}-->

<!--/* Fix the circle for containers on the right side */-->
<!--.right::after {-->
<!--left: -13px;-->
<!--}-->

<!--/* The actual content */-->
<!--.content {-->
<!--padding: 20px 30px;-->
<!--background-color: white;-->
<!--position: relative;-->
<!--border-radius: 6px;-->
<!--}-->

<!--/* Media queries - Responsive timeline on screens less than 600px wide */-->
<!--@media screen and (max-width: 600px) {-->
<!--/* Place the timelime to the left */-->
<!--.timeline::after {-->
<!--left: 31px;-->
<!--}-->

<!--/* Full-width containers */-->
<!--.container {-->
<!--width: 100%;-->
<!--padding-left: 70px;-->
<!--padding-right: 25px;-->
<!--}-->

<!--/* Make sure that all arrows are pointing leftwards */-->
<!--.container::before {-->
<!--left: 60px;-->
<!--border: medium solid white;-->
<!--border-width: 10px 10px 10px 0;-->
<!--border-color: transparent white transparent transparent;-->
<!--}-->

<!--/* Make sure all circles are at the same spot */-->
<!--.left::after, .right::after {-->
<!--left: 15px;-->
<!--}-->

<!--/* Make all right containers behave like the left ones */-->
<!--.right {-->
<!--left: 0%;-->
<!--}-->
<!--}-->
