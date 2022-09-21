const navBar = document.querySelector('#nav');
const navLogo = document.querySelector('#navLogo');
const navItems = document.querySelectorAll('#navItem');

function changeClass(target, oldClass, newClass) {
	target.classList.remove(oldClass);
	target.classList.add(newClass);
}

let scrollPos = 0;
function scrollDown() {
	scrollPos = document.body.getBoundingClientRect().top;
	if (scrollPos < 0) {
		changeClass(navBar, 'navbgTransp', 'navbgBlk');
		changeClass(navLogo, 'navigate-logo', 'navigate-logoW');
		navItems.forEach((item) => {
			changeClass(item, 'itemBlk', 'itemWhite');
		});
	} else if (scrollPos === 0) {
		changeClass(navBar, 'navbgBlk', 'navbgTransp');
		changeClass(navLogo, 'navigate-logoW', 'navigate-logo');
		navItems.forEach((item) => {
			changeClass(item, 'itemWhite', 'itemBlk');
		});
	}
}

window.addEventListener('scroll', scrollDown);
