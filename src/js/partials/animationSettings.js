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

// menu hover
$(function() {
    $('#hamburger-3,#top-nav ul').mouseenter(function() {
        $('#header .hover-menu-bg').css('opacity', '1');
        $('#header ul li ul').css('display','inherit');
        $('#header ul li ul').css('opacity', '1');
        $('#header ul li a').css('color', 'black');
        $('#header ul li ul li a').css('color','#757575');
        $('#header .hamburger').addClass("is-active");

    });
    $('#header .hover-menu-bg').mouseleave(function () {
        $('#header .hover-menu-bg').css('opacity', '0');
        $('#header ul li ul').css('display','none');
        $('#header ul li ul').css('opacity', '0');
        $('#header ul li a').css('color', 'white');
        $('#header .hamburger').removeClass("is-active");
    });
});


