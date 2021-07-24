import menuData from '../menu.json';
import creatorMenuMarkup from '../templates/menu-list.hbs';

const menuRef = document.querySelector('.js-menu');
const menuMarkup = creatorMenuMarkup(menuData);

menuRef.insertAdjacentHTML('beforeend', menuMarkup);
