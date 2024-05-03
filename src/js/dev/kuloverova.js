window.$ = window.jQuery = require('jquery');

import popup from '../utils/popup';
import form from '../utils/form';
import { gsap, ScrollTrigger } from 'gsap/all';
export const modules = {};

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}
  try {
    if (window.innerWidth > 768) {
      animMainSpace();
    }
  } catch {}
});

window.addEventListener('load', function () {
  try {
    intro();
  } catch {}
});

function intro() {
  const preloader = document.querySelector('.preloader');
  const video = preloader.querySelector('video');
  video.style.transition = 'opacity 0.8s';
  setTimeout(() => {
    video.style.opacity = '1';
    video.play();

  }, 300);
  setTimeout(() => {
    preloader.classList.add('preloader-remove');
  }, 3500);

  
}

function animMainSpace() {
  const elem = document.querySelector('.main-space_list');
  const section = document.querySelector('.main-space');
  ScrollTrigger.create({
    trigger: section,
    animation: gsap.from(elem, {
      keyframes: {
        '0%': { x: '=0' },
        '100%': { x: '-=12%' }
      }
    }),
    start: 'top bottom',
    end: 'bottom top',
    scrub: 2,
    toggleActions: 'play none reverse none'
  });
}

// Пример использования для одного элемента
