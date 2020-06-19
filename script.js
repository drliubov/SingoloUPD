// header

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__navigation');
burger.onclick = (event) => {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
}
