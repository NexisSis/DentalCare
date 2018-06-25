// testimonials carousel
// $(function() {
//     $('.jcarousel')
//         .jcarousel({
//             wrap: 'both'
//         });
//
//     $('.jcarousel-control-prev')
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
//     $('.jcarousel-control-next')
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

(function($) {
    $(function() {
        $('.jcarousel').jcarousel(
            {
                wrap: 'both',
                animation: 'slow'
            }
        );

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        var a;
        console.log($('.jcarousel-pagination').perPage(a));
        console.log(a);с
        // $('.testimonials-total-counter')({
        //         return jcarouselPagination.perPage;
        // );
    });
})(jQuery);
