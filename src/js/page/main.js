import $ from "jquery";
import Swiper from 'swiper';
import { rem } from '../utils/constants';

$('.main-space_box--more').on('click', function(){
    $('.main-space_box').toggleClass('active')
})