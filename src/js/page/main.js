import $ from "jquery";
import Swiper from 'swiper';
import {
	Pagination,
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

$('.main-cosmetics_block').on('click', function(){
    $('.main-cosmetics_block').removeClass('active')
    $('.main-cosmetics_item').removeClass('active')
    $(this).addClass('active')
    $($('.main-cosmetics_item')[$(this).closest('.swiper-slide').index()]).addClass('active')
})

if (window.screen.width < 769) {
    const swiper = new Swiper('.main-cosmetics_swiper', {
        modules: [Pagination],
        pagination: {
            el: ".swiper-pading",
        },
    });
}
