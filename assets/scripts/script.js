$(document).ready(function () {

    $('.parallax').parallax();

    $('section').scrollSpy({scrollOffset: 0});

    if ($(window).width() > 768) {
        $(window).scroll(function () {
            var scrollTop = $("body").scrollTop();
            var elementOffset2 = $('#section2').offset().top;
            var elementOffset3 = $('#section3').offset().top;
            var elementOffset4 = $('#section4').offset().top;
            var elementOffset5 = $('#section5').offset().top;

            var elementOffset2t = $('#section2 .top').offset().top;
            var elementOffset3t = $('#section3 .top').offset().top;
            var elementOffset4t = $('#section4 .bottom').offset().top;
            var elementOffset5t = $('#section5 .bottom').offset().top;

            var oVal2 = (elementOffset2 - scrollTop - 100) / 30;
            var oVal3 = (elementOffset3 - scrollTop - 100) / 30;
            var oVal4 = (elementOffset4 - scrollTop + 100) / 30;
            var oVal5 = (elementOffset5 - scrollTop) / 30;

            var oVal22 = (elementOffset2 - scrollTop) / 25;
            var oVal32 = (elementOffset3 - scrollTop) / 25;
            var oVal42 = (elementOffset4 - scrollTop + 200) / 30;
            var oVal52 = (elementOffset5 - scrollTop + 75) / 30;

            var oVal43 = (elementOffset4 - scrollTop + 300) / 30;
            var oVal53 = (elementOffset5 - scrollTop + 150) / 30;

            //var oVal2t = (elementOffset2t - scrollTop) / 30;
            var oVal3t = (elementOffset3t - scrollTop) / 30;
            var oVal4t = (elementOffset4t - scrollTop) / 30;
            var oVal5t = (elementOffset5t - scrollTop - 300) / 30;

            //section2
            $('#section2 .bottom h1 .p1').css({
                'filter': 'blur(' + oVal2 + 'px)',
                '-webkit-filter': 'blur(' + oVal2 + 'px)',
                '-moz-filter': 'blur(' + oVal2 + 'px)',
                'opacity': 1 - (Math.abs(oVal2) / 18)
            });

            $('#section2 .bottom h1 .p2').css({
                'filter': 'blur(' + oVal22 + 'px)',
                '-webkit-filter': 'blur(' + oVal22 + 'px)',
                '-moz-filter': 'blur(' + oVal22 + 'px)',
                'opacity': 1 - (Math.abs(oVal22) / 18)
            });


            //section3
            $('#section3 .bottom h1 .p1').css({
              'filter': 'blur(' + oVal3 + 'px)',
              '-webkit-filter': 'blur(' + oVal3 + 'px)',
              '-moz-filter': 'blur(' + oVal3 + 'px)',
              'opacity': 1 - (Math.abs(oVal3) / 18)
            });

            $('#section3 .bottom h1 .p2').css({
                'filter': 'blur(' + oVal32 + 'px)',
                '-webkit-filter': 'blur(' + oVal32 + 'px)',
                '-moz-filter': 'blur(' + oVal32 + 'px)',
                'opacity': 1 - (Math.abs(oVal32) / 18)
            });


            //section4
            $('#section4 .bottom h1 .p1').css({
                'filter': 'blur(' + oVal4 + 'px)',
                '-webkit-filter': 'blur(' + oVal4 + 'px)',
                '-moz-filter': 'blur(' + oVal4 + 'px)',
                'opacity': 1 - (Math.abs(oVal4) / 18)
            });

            $('#section4 .bottom h1 .p2').css({
                'filter': 'blur(' + oVal42 + 'px)',
                '-webkit-filter': 'blur(' + oVal42 + 'px)',
                '-moz-filter': 'blur(' + oVal42 + 'px)',
                'opacity': 1 - (Math.abs(oVal42) / 18)
            });

            $('#section4 .bottom h1 .p3').css({
                'filter': 'blur(' + oVal43 + 'px)',
                '-webkit-filter': 'blur(' + oVal43 + 'px)',
                '-moz-filter': 'blur(' + oVal43 + 'px)',
                'opacity': 1 - (Math.abs(oVal43) / 18)
            });


            //section5
            $('#section5 .bottom .p1').css({
                'filter': 'blur(' + oVal5 + 'px)',
                '-webkit-filter': 'blur(' + oVal5 + 'px)',
                '-moz-filter': 'blur(' + oVal5 + 'px)',
                'opacity': 1 - (Math.abs(oVal5) / 18)

            });


            $('#section5 .bottom .p2').css({
                'filter': 'blur(' + oVal52 + 'px)',
                '-webkit-filter': 'blur(' + oVal52 + 'px)',
                '-moz-filter': 'blur(' + oVal52 + 'px)',
                'opacity': 1 - (Math.abs(oVal52) / 18)
            });

            $('#section5 .bottom .p3').css({
                'filter': 'blur(' + oVal53 + 'px)',
                '-webkit-filter': 'blur(' + oVal53 + 'px)',
                '-moz-filter': 'blur(' + oVal53 + 'px)',
                'opacity': 1 - (Math.abs(oVal53) / 18)
            });


        });
    };


    if ($(window).width() > 1500) {
        $('#section3 .parallax img').attr('src','https://s3.amazonaws.com/ijadams/btb/sky-bg-big.jpg');
        $('#section4 .parallax img').attr('src','https://s3.amazonaws.com/ijadams/btb/section4-bg-big.jpg');
        $('#section5 .parallax img').attr('src','https://s3.amazonaws.com/ijadams/btb/section5-bg-big.jpg');
    }


    $('#cast li:gt(15)').hide();
    $('#more').click(function () {
        $('ul li:gt(15)').slideDown("fast");
        $('#more').css('display', 'none');
    });

});
