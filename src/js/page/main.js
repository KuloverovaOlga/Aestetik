import $ from "jquery";
import Swiper from 'swiper';
import {
	Pagination,
    Navigation,
    Mousewheel
} from "swiper/modules";
import "jquery-ui/ui/effect";
import { rem } from '../utils/constants';

$('.header-burger').on('click', function(){
    $('.header').toggleClass('open')
    $('body').toggleClass('scrollnone')
})

$('.show-more').on('click', function(){
    const $content = $(this).closest('.show-content').find('.show-text')
    console.log($content);

    if($content.hasClass('hideContent')){
        $content.switchClass("hideContent", "showContent", 400);
    } else {
        $content.switchClass("showContent", "hideContent", 400);
    };
})

$('.main-space_box--more').on('click', function(){
    $('.main-space_box').toggleClass('active')
})

$('.main-cosmetics_block').on('mouseenter', function(){
    $('.main-cosmetics_block').removeClass('active')
    $('.main-cosmetics_item').removeClass('active')
    $(this).addClass('active')
    $($('.main-cosmetics_item')[$(this).closest('.swiper-slide').index()]).addClass('active')
})

const main_equipment_swiper = new Swiper('.main-equipment_swiper', {
    modules: [Pagination, Mousewheel],
	spaceBetween: rem(10),
    // autoHeight: true,
    mousewheel: {
        enabled: true,
        releaseOnEdges: true,
    },
    pagination: {
        el: ".main-equipment_pagin",
    },
    on: {
        slideChange: function() {
            setTimeout(function () {
                main_equipment_swiper.params.mousewheel.releaseOnEdges = false;
            }, 500);
        },
        reachEnd: function() {
            setTimeout(function () {
                main_equipment_swiper.params.mousewheel.releaseOnEdges = true;
            }, 750);
        }
    }
});

$('.main-equipment_container-box_swiper').each(function( index ) {
    new Swiper(this, {
        modules: [Navigation],
        slidesPerView: 'auto',
        navigation: {
            nextEl: $(this).siblings(".main-equipment_container-box_swiper-right")[0],
            prevEl: $(this).siblings(".main-equipment_container-box_swiper-left")[0],
        },
    });
});


if (window.screen.width < 769) {
    const swiper = new Swiper('.main-cosmetics_swiper', {
        modules: [Pagination],
        pagination: {
            el: ".main-cosmetics_pagination",
        },
    });
}
