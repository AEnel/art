import modals from './modules/modal';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import cals from './modules/calc';
import filter from './modules/filter';
import showPicture from './modules/showPicture';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';

window.addEventListener('DOMContentLoaded', () => {

  sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', 'vertical');
  modals();
  forms();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyles('.button-styles','#styles .row');
  cals('#size', '#material', '#options','.promocode','.calc-price');
  filter();
  showPicture('.sizes-block');
  accordion('.accordion-heading');
  burger('.burger-menu', '.burger', '.burger-container');
  scrolling('.pageup');
  drop();


});