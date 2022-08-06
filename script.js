// CONTENT
const about = $('.about').detach()
const work = $('.work').detach()
const goals = $('.goals').detach()
const pricing = $('.pricing').detach()

$('.button1').on('click',function () {
	$('.work').detach()
    $('.goals').detach()
    $('.pricing').detach()
	$('.content').append(about)

    $('.button1').addClass('current')
    $('.button2').removeClass('current')
    $('.button3').removeClass('current')
    $('.button4').removeClass('current')
})

$('.button2').on('click',function () {
	$('.about').detach()
    $('.goals').detach()
    $('.pricing').detach()
	$('.content').append(work)

    $('.button1').removeClass('current')
    $('.button2').addClass('current')
    $('.button3').removeClass('current')
    $('.button4').removeClass('current')
})

$('.button3').on('click', function () {
	$('.about').detach()
    $('.work').detach()
    $('.pricing').detach()
	$('.content').append(goals)

    $('.button1').removeClass('current')
    $('.button2').removeClass('current')
    $('.button3').addClass('current')
    $('.button4').removeClass('current')
})

$('.button4').on('click',function () {
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
let dropdownVisibility = false
$('.menu-button img').on('click',function () {
    if (dropdownVisibility === true){
        $('.dropdown').css('display', 'none')
        dropdownVisibility = false
        $('.menu-button img').removeClass('menuActive')
    } else {
        $('.dropdown').css('display', 'flex')
        dropdownVisibility = true
        $('.menu-button img').addClass('menuActive')
    }
})