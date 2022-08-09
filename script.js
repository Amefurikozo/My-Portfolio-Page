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
    
    $('.current-skills').addClass('animate__animated animate__flipInX')
    $('.hello').addClass('animate__animated animate__fadeIn')
    
    $('.content').removeClass('active')
    $('.slogan img').css('display', 'none')
    $('.slogan').css('display', 'flex')
    $('.mountain-sun').css('display', 'flex')

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

    $('.work').addClass('animate__animated animate__fadeInUp')

    $('.content').removeClass('active')
    $('.slogan img').css('display', 'none')
    $('.slogan').css('display', 'flex')
    $('.mountain-sun').css('display', 'flex')

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

    $('.goal-categories').addClass('animate__animated animate__jackInTheBox')

    $('.content').removeClass('active')
    $('.slogan img').css('display', 'none')
    $('.slogan').css('display', 'flex')
    $('.mountain-sun').css('display', 'flex')

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

    $('.mountain-sun').css('display', 'none')
    $('.slogan img').css('display', 'block')
    $('.slogan img').addClass('animate__animated animate__fadeIn')

    $('.content').addClass('active')

    $('.button1').removeClass('current')
    $('.button2').removeClass('current')
    $('.button3').removeClass('current')
    $('.button4').addClass('current')

    $('.timeline-header').on('click', function() {
        $('.timeline-header').addClass('underline')
        $('.overview-header').removeClass('underline')
        $('.terms-header').removeClass('underline')

        $('.overview-info').css('display', 'none')
        $('.terms-info').css('display', 'none')
        $('.timeline-info').css('display', 'block')
    })

    $('.terms-header').on('click', function() {
        $('.terms-header').addClass('underline')
        $('.timeline-header').removeClass('underline')
        $('.overview-header').removeClass('underline')

        $('.overview-info').css('display', 'none')
        $('.timeline-info').css('display', 'none')
        $('.terms-info').css('display', 'block')
    })

    $('.overview-header').on('click', function() {
        $('.overview-header').addClass('underline')
        $('.timeline-header').removeClass('underline')
        $('.terms-header').removeClass('underline')

        $('.terms-info').css('display', 'none')
        $('.timeline-info').css('display', 'none')
        $('.overview-info').css('display', 'block')
    })
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

//PLAN-INFO

$('.slogan').on('click', function() {
    console.log('clicked')
})