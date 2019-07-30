function photoAppear(){
	var sectionAboutUsPhotoPic = document.querySelector('.section-about-us__photo-pic');
	var sectionAboutUsPosition = sectionAboutUsPhotoPic.getBoundingClientRect().top;
	var screenPosition = window.innerHeight;

	if (sectionAboutUsPhotoPic < screenPosition) {
		sectionAboutUsPhotoPic.classList.add('section-about-us__appear');

	}
}
window.addEventListener('scroll',photoAppear);
