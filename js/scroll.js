const navBar = document.querySelector('#nav');
const navLogo = document.querySelector('#navLogo');
const navItems = document.querySelectorAll('.navigate-item');
const titleContent = document.querySelector('#titleContent');
let titConTop = titleContent.getBoundingClientRect().top;

function scrollDown() {
	if (titConTop <= 0) {
		if (!navBar.classList.contains('navChange')) {
			navBar.classList.add('navChange');
			navLogo.classList.add('navChange-logo');
			navItems.forEach((item) => {
				item.classList.add('navChange-item');
			});
		}
	} else if (titConTop > 0) {
		if (navBar.classList.contains('navChange')) {
			navBar.classList.remove('navChange');
			navLogo.classList.remove('navChange-logo');
			navItems.forEach((item) => {
				item.classList.remove('navChange-item');
			});
		}
	}
	titConTop = titleContent.getBoundingClientRect().top;
}

window.addEventListener('scroll', scrollDown);
