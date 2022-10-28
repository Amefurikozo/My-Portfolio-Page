const about = document.querySelector('.about')
const work = document.querySelector('.work')
const goals = document.querySelector('.goals')
const pricing = document.querySelector('.pricing')

work.style.display = 'none'
goals.style.display = 'none'
pricing.style.display = 'none'
about.style.display = ''

button1 = document.querySelector('.button1')
button2 = document.querySelector('.button2')
button3 = document.querySelector('.button3')
button4 = document.querySelector('.button4')

logoSection = document.querySelector('.mountain-sun')
sloganImgSection = document.querySelector('.slogan img')
contentSection = document.querySelector('.content')

slogan = document.querySelector('.slogan')

button1.onclick = function () {
	work.style.display = 'none'
	goals.style.display = 'none'
	pricing.style.display = 'none'
	about.style.display = ''

	contentSection.classList.remove('active')
	sloganImgSection.style.display = 'none'
	slogan.style.display = 'flex'
	logoSection.style.display = 'flex'

	button1.classList.add('current')
	button2.classList.remove('current')
	button3.classList.remove('current')
	button4.classList.remove('current')
}

button2.onclick = function () {
	about.style.display = 'none'
	goals.style.display = 'none'
	pricing.style.display = 'none'
	work.style.display = ''

	contentSection.classList.remove('active')
	sloganImgSection.style.display = 'none'
	slogan.style.display = 'flex'
	logoSection.style.display = 'flex'

	button1.classList.remove('current')
	button2.classList.add('current')
	button3.classList.remove('current')
	button4.classList.remove('current')
}

button3.onclick = function () {
	about.style.display = 'none'
	work.style.display = 'none'
	pricing.style.display = 'none'
	goals.style.display = ''

	contentSection.classList.remove('active')
	sloganImgSection.style.display = 'none'
	slogan.style.display = 'flex'
	logoSection.style.display = 'flex'

	button1.classList.remove('current')
	button2.classList.remove('current')
	button3.classList.add('current')
	button4.classList.remove('current')
}

button4.onclick = function () {
	about.style.display = 'none'
	work.style.display = 'none'
	goals.style.display = 'none'
	pricing.style.display = ''

	logoSection.style.display = 'none'
	sloganImgSection.style.display = 'block'
	contentSection.classList.add('active')

	button1.classList.remove('current')
	button2.classList.remove('current')
	button3.classList.remove('current')
	button4.classList.add('current')
}

timeline = document.querySelector('.timeline-header')
terms = document.querySelector('.terms-header')
overview = document.querySelector('.overview-header')

timeline.onclick = function () {
	document.querySelector('.timeline-header').classList.add('underline')
	document.querySelector('.overview-header').classList.remove('underline')
	document.querySelector('.terms-header').classList.remove('underline')

	document.querySelector('.overview-info').style.display = 'none'
	document.querySelector('.terms-info').style.display = 'none'
	document.querySelector('.timeline-info').style.display = 'block'
}

terms.onclick = function () {
	document.querySelector('.terms-header').classList.add('underline')
	document.querySelector('.timeline-header').classList.remove('underline')
	document.querySelector('.overview-header').classList.remove('underline')

	document.querySelector('.overview-info').style.display = 'none'
	document.querySelector('.timeline-info').style.display = 'none'
	document.querySelector('.terms-info').style.display = 'block'
}

overview.onclick = function () {
	document.querySelector('.overview-header').classList.add('underline')
	document.querySelector('.timeline-header').classList.remove('underline')
	document.querySelector('.terms-header').classList.remove('underline')

	document.querySelector('.terms-info').style.display = 'none'
	document.querySelector('.timeline-info').style.display = 'none'
	document.querySelector('.overview-info').style.display = 'block'
}

menu = document.querySelector('.menu-button img')
menu.onclick = function () {
	console.log(menu)
	if (document.querySelector('.dropdown').style.display === 'flex') {
		document.querySelector('.dropdown').style.display = 'none'
		document.querySelector('.menu-button img').classList.remove('menuActive')
	} else {
		document.querySelector('.dropdown').style.display = 'flex'
		document.querySelector('.menu-button img').classList.add('menuActive')
	}
}
