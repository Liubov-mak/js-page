import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import scroll from './modules/scroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import pic from './modules/pic';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import reg from './modules/reg';
import createCalendar from './modules/calendar';
import sliderCarousel from './modules/sliderCarousel';


// timer
countTimer('12 january 2021');
// меню
toggleMenu();
// popup
togglePopUp();
// scroll
scroll();
// tabs
tabs();
// слайдер
slider();
pic();
calc(100);
// send-ajax-form
sendForm();
reg();
createCalendar(calendarJan, 2021, 1);
createCalendar(calendarFeb, 2021, 2);
createCalendar(calendarMar, 2021, 3);
createCalendar(calendarApr, 2021, 4);
createCalendar(calendarMay, 2021, 5);
createCalendar(calendarJune, 2021, 6);
createCalendar(calendarJuly, 2021, 7);
createCalendar(calendarAug, 2021, 8);
createCalendar(calendarSep, 2021, 9);
createCalendar(calendarOct, 2021, 10);
createCalendar(calendarNov, 2021, 11);
createCalendar(calendarDec, 2021, 12);
sliderCarousel();
