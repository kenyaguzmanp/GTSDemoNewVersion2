$(document).ready(function () {   
    //Carousel
    //Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#myCarousel'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel({interval: 3000});
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
    
    
    
    
    var windowWidth = $(window).width();
    var navBarTop = $("#navcon").height();
    $(".navBotton, #linkNav7, #linkNav8").on("click", function () {
        var idSelected = $(this).attr("id");
        var sectionFromId = idSelected.slice(-1);
        $('#dropDownMenu' + sectionFromId).addClass('animated fadeIn');
        if (windowWidth >= 768 && $("#section" + sectionFromId).length !== 0) {
            $('html,body').animate({
                scrollTop: $("#section" + sectionFromId).offset().top - navBarTop},
                    'slow');
        }
    });

    addClassToNavBar(windowWidth);

    $(window).resize(function () {
        windowWidth = $(window).width();
        addClassToNavBar(windowWidth);
    });

    function addClassToNavBar(windowWidth) {
        navBarTop = $("#navcon").height();
        $("#all-content").css("margin-top", navBarTop + "px");
        if (windowWidth < 768) {            
            $("#navSec1, #navSec2, #navSec3").addClass("col-xs-4");
            $(".navBotton").on("click", function () {
                var navBarToggleTop = $("#navcon").height();
                var idSelected = $(this).attr("id");
                var sectionFromId = idSelected.slice(-1);
                if($("#section" + sectionFromId).length === 0){
                    window.location.href = "careers.html";
                }else{
                   $('html,body').animate({
                    scrollTop: $("#section" + sectionFromId).offset().top - navBarToggleTop},
                        'slow'); 
                }
                

            });
        } else {
            $("#navSec1, #navSec2, #navSec3").removeClass("col-xs-4");
        }
    }

    $("#myCarousel3").carousel({
        interval: false
    });
    

});


