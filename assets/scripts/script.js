$(document).ready(function(){
    $('.parallax').parallax();
    $('section').scrollSpy({scrollOffset:0});

    //add elipses based on text length
    $('#section6 ul li').each(function(index){
        n = 30 - $(this).find('span.member').text().length + $(this).find('span.character').text().length;
        $(this).find('span.member').append('<span>' + ' . '.repeat(n) + '</span>');
    });
});
       