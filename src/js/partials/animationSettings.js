new WOW().init();

// menu hover
if($( window ).width() < 576){
    $('#header .hamburger').click(function () {
        $('#header .hamburger').toggleClass("is-active");

        $('#header .hover-menu-bg').toggleClass("opacity");
    });
}else{
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
}



//help onHover

$(function(){
    $('.help-bg-2').hover(function () {
        $('.help-mobile-blur-1').css('filter','blur(2px)');
    },function(){
        $('.help-mobile-blur-1').css('filter','blur(0px)');
    });
    $('.help-bg-3').hover(function () {
        $('.help-mobile-blur-2').css('filter','blur(2px)');
    },function(){
        $('.help-mobile-blur-2').css('filter','blur(0px)');
    });
    $('.help-bg-4').hover(function () {
        $('.help-mobile-blur-3').css('filter','blur(2px)');
    },function(){
        $('.help-mobile-blur-3').css('filter','blur(0px)');
    });
});