$(document).ready(function(){
  $(".recruiters-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	dots: false,
	responsive: {
	  0: {
		items: 2
	  },
	  768: {
		items: 4
	  },
	  1000: {
		items: 6
	  }
	}
  });
  $(".reasons-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	dots: false,
	responsive: {
	  0: {
		items: 2
	  },
	  700: {
		items: 4
	  },
	  1200: {
		items: 6
	  }
	}
  });
  $(".leadership-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav:false,
    dots: true,
	responsive: {
	  0: {
		items: 1
	  },
	  700: {
		items: 3
	  },
	  1200: {
		items: 4
	  }
	}
  });
  $(".testimonials-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	responsive: {
	  0: {
		items: 1
	  },
	  700: {
		items: 2
	  },
	  1200: {
		items: 3
	  }
	}
  });
  $(".gallery-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav: false,
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 2
	  },
	  1000: {
		items: 2
	  }
	}
  });
});