WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// Our resources
	let ourResourcesSlider = document.querySelector('.our_resources .swiper')

	if (ourResourcesSlider) {
		new Swiper('.our_resources .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			breakpoints: {
				0: {
					centeredSlides: true,
					spaceBetween: 8,
					slidesPerView: 3,
					slideToClickedSlide: true
				},
				1024: {
					spaceBetween: 15,
					slidesPerView: 5
				}
			}
		})
	}


	// Copy
	const clipboard = new ClipboardJS('.copy_btn')
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 440) document.getElementsByTagName('meta')['viewport'].content = 'width=440, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})