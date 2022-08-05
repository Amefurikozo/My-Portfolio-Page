// CONTENT

const about = $('.about').detach()
const work = $('.work').detach()
const goals = $('.goals').detach()
const pricing = $('.pricing').detach()

$('.button1').click(function () {
	$('.work').detach()
    $('.goals').detach()
    $('.pricing').detach()
	$('.content').append(about)

    $('.button1').addClass('current')
    $('.button2').removeClass('current')
    $('.button3').removeClass('current')
    $('.button4').removeClass('current')
})

$('.button2').click(function () {
	$('.about').detach()
    $('.goals').detach()
    $('.pricing').detach()
	$('.content').append(work)

    $('.button1').removeClass('current')
    $('.button2').addClass('current')
    $('.button3').removeClass('current')
    $('.button4').removeClass('current')
})

$('.button3').click(function () {
	$('.about').detach()
    $('.work').detach()
    $('.pricing').detach()
	$('.content').append(goals)

    $('.button1').removeClass('current')
    $('.button2').removeClass('current')
    $('.button3').addClass('current')
    $('.button4').removeClass('current')
})

$('.button4').click(function () {
	$('.about').detach()
    $('.work').detach()
    $('.goals').detach()
	$('.content').append(pricing)

    $('.button1').removeClass('current')
    $('.button2').removeClass('current')
    $('.button3').removeClass('current')
    $('.button4').addClass('current')
})

$('.content').append(about)


// NAVBAR
const dropdown = $('.dropdown').detach()
let dropdownVisibility = false
$('.menu-button img').click(function () {
    if (dropdownVisibility === true){
        $('.dropdown').detach()
        dropdownVisibility = false
        $('.menu-button img').removeClass('menuActive')
    } else {
        $('.menu-button').append(dropdown)
        dropdownVisibility = true
        $('.menu-button img').addClass('menuActive')
    }
})