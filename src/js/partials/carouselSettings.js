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

        $('.jcarousel-pagination').jcarouselPagination({
            item: function(page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });
        // $('.testimonials-total-counter')({
        //         return jcarouselPagination.perPage;
        // );
    });
})(jQuery);
