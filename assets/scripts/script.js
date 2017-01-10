$(document).ready(function () {
    $(function () {
        $('.parallax').parallax();
    });
    $('section').scrollSpy({scrollOffset: 0});

    //add elipses based on text length
    $('#section6 ul li').each(function (index) {
        n = 35 - $(this).find('span.member').text().length + $(this).find('span.character').text().length;
        $(this).find('span.member').append('<span class="elips">' + ' . '.repeat(n) + '</span>');
    });


    if ($(window).width() > 768) {
        $(window).scroll(function () {
            var scrollTop = $("body").scrollTop();
            var elementOffset2 = $('#section2').offset().top;
            var elementOffset3 = $('#section3').offset().top;
            var elementOffset4 = $('#section4').offset().top;
            var elementOffset5 = $('#section5').offset().top;

            var oVal2 = (elementOffset2 - scrollTop) / 50;
            var oVal3 = (elementOffset3 - scrollTop) / 50;
            var oVal4 = (elementOffset4 - scrollTop) / 50;
            var oVal5 = (elementOffset5 - scrollTop) / 50;

            $('#section2 .top h1').css({
                'filter': 'blur(' + oVal2 + 'px)',
                '-webkit-filter': 'blur(' + oVal2 + 'px)',
                '-moz-filter': 'blur(' + oVal2 + 'px)'
            });
            $('#section3 .top h1').css({
                'filter': 'blur(' + oVal3 + 'px)',
                '-webkit-filter': 'blur(' + oVal3 + 'px)',
                '-moz-filter': 'blur(' + oVal3 + 'px)'
            });
            $('#section4 .top h1').css({
                'filter': 'blur(' + oVal4 + 'px)',
                '-webkit-filter': 'blur(' + oVal4 + 'px)',
                '-moz-filter': 'blur(' + oVal4 + 'px)'
            });
            $('#section5 .top h1').css({
                'filter': 'blur(' + oVal5 + 'px)',
                '-webkit-filter': 'blur(' + oVal5 + 'px)',
                '-moz-filter': 'blur(' + oVal5 + 'px)'
            });
        });
    }
    ;


});
