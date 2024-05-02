window.$ = window.jQuery = require('jquery');

import popup from '../utils/popup';
import form from '../utils/form';

export const modules = {};
document.addEventListener('DOMContentLoaded', () => {
  try {
    popup();
  } catch {}
  try {
    form();
  } catch {}

});
