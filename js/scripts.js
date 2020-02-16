(function () {

  'use strict';

  // carousel-reviews
  if ($('.carousel-reviews').length > 0) {
    $('.carousel-reviews').owlCarousel({
      loop: true,
      margin: 0,
      dots: false,
      nav: true,
      autoHeight: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  }


  // faq accordion
  if ($('.accordion-container').length > 0) {
    new Accordion('.accordion-container');
  }


  // scroll anchor
  $('.js-scroll').bind("click", function (e) {
    const anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 10
    }, 500);
    e.preventDefault();
  });
  
  
  
  // show password
	function showPassword(e) {
		const target = e.target;
		const formPasswordControl = document.querySelectorAll('.form__control--password');
		
		if (target.classList.contains('form__password-i-eye')) {
			for (let i = 0; i < formPasswordControl.length; i++) {
				if (formPasswordControl[i].type === 'password') {
					formPasswordControl[i].type = 'text';
					target.classList.add('show');
				}
				else {
					formPasswordControl[i].type = 'password';
					target.classList.remove('show');
				}
			}
		}

	}
	window.addEventListener('click', showPassword);


})();