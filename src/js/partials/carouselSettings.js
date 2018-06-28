// testimonials carousel
// $(function() {
//     $('.jcarousel')
//         .jcarousel({
//             wrap: 'both'
//         });
//
//     $('.honors-jcarousel-control-prev')
//         .on('jcarouselcontrol:active', function() {
//             $(this).removeClass('inactive');
//         })
//         .on('jcarouselcontrol:inactive', function() {
//             $(this).addClass('inactive');
//         })
//         .jcarouselControl({
//             // Options go here
//             target: '-=1'
//         });
//
//     $('.honors-jcarousel-control-next')
//         .on('jcarouselcontrol:active', function() {
//             $(this).removeClass('inactive');
//         })
//         .on('jcarouselcontrol:inactive', function() {
//             $(this).addClass('inactive');
//         })
//         .jcarouselControl({
//             // Options go here
//             target: '+=1'
//         });
// });
//


// Testimonials Carousel Start
(function($) {
    $(function() {
        $('.testimonials-jcarousel').jcarousel(
            {
                wrap: 'both',
                animation: 'slow'
            }
        );

        $('.testimonials-jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.testimonials-jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
        // pagination init
        $('.testimonials-total-counter').text($('.testimonials-jcarousel').jcarousel('items').length);
        $('.testimonials-counter').text('01');


        $('.testimonials-jcarousel-control-next,.testimonials-jcarousel-control-prev').click(function(){
            var target = $('.testimonials-jcarousel').jcarousel('target').index()+1;
            var firstNum = target<10?'0':'';
            $('.testimonials-counter').text(firstNum+target);
        });

    });
})(jQuery);

// Testimonials Carousel Stop

// Gallery Carousel Start

(function($) {
    $(function() {
        $('.gallery-jcarousel').jcarousel(
            {
                wrap: 'both',
                animation: 'slow'
            }
        );

        $('.gallery-jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.gallery-jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
        // pagination init
        $('#gallery-total-counter').text($('.gallery-jcarousel').jcarousel('items').length);
        $('#gallery-counter').text('01');


        $('.gallery-jcarousel-control-next,.gallery-jcarousel-control-prev').click(function(){
            var target = $('.gallery-jcarousel').jcarousel('target').index()+1;
            var firstNum = target<10?'0':'';
            $('#gallery-counter').text(firstNum+target);
        });

    });
})(jQuery);


// Gallery Carousel Stop

// Honors Mobile Carousel Start

(function($) {
    $(function() {
        $('.honors-jcarousel')
            .jcarousel({
                vertical: true,
                wrap: 'both'
            });

        $('.honors-jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.honors-jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
    });
})(jQuery);


// Honors Mobile Carousel Stop