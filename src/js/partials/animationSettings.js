new WOW().init();

// smooth animation
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    var minusScroll = 125;
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width<=576){
        minusScroll=100;
    }
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top-minusScroll
    }, 900);

});
