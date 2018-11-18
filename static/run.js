(function($){
  	$.fn.visible = function(partial) {
  	  
  	    var $t            = $(this),
  	        $w            = $(window),
  	        viewTop       = $w.scrollTop(),
  	        viewBottom    = viewTop + $w.height(),
  	        _top          = $t.offset().top,
  	        _bottom       = _top + $t.height(),
  	        compareTop    = partial === true ? _bottom : _top,
  	        compareBottom = partial === true ? _top : _bottom;
  	  
  	  return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  	};

	$(window).scroll(function(event) {
	  
	  $(".frame").each(function(i, el) {
	    var el = $(el);
	    if (el.visible(true)) {
	      el.addClass("come-in"); 
	    } 
	  });
	  
	});

	$(document).on('click','#gettit',function(e){
		if($(window).width() > 730) {
			e.preventDefault();
			$('.mode').css('transform','translateY(0)');
			$('.mode').css('pointer-events','auto');
		}
	});
	$(document).on('click','#quoter',function(e){
		if($(window).width() > 730) {
			e.preventDefault();
			$('.mode').css('transform','translateY(0)');
			$('.mode').css('pointer-events','auto');
		}
	});
	$(document).on('click','.mode .close',function(e){
		$('.mode').css('transform','translateY(100%)');
		$('.mode').css('pointer-events','none');
	});
	$(document).ready(function(){
		$('.slickit').slick({dots: true,autoplay: true,autoplaySpeed: 5000,speed: 300,infinite: true,arrows: false,slidesToScroll:1,slidesToShow:1,swipe: true,draggable: true,touchMove: true,responsive: [
							{
							  breakpoint: 1025,
							  settings: {
								slidesToShow: 1,
								slidesToScroll: 1,  
							  }
							},
							{
							  breakpoint: 769,
							  settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							  }
							},
							{
							  breakpoint: 481,
							  settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							  }
							}
						],pauseOnHover: true,
						pauseOnDotsHover: true,customPaging: function(slider, i) {
                   return '<div class=dott></div>';
                }});
	});
})(jQuery)
