$(document).ready(function(){
    $('.parallax').parallax();
    $('section').scrollSpy({scrollOffset:0});

    //add elipses based on text length
    $('#section6 ul li').each(function(index){
        n = 30 - $(this).find('span.member').text().length + $(this).find('span.character').text().length;
        $(this).find('span.member').append('<span class="elips">' + ' . '.repeat(n) + '</span>');
    });

    var options = [
        {
            selector: '#section2 .bottom', offset: 0, callback: function() {
                $('#section2 .bottom').addClass('scrolled');
            }
        },
        {
            selector: '#section3 .bottom', offset: 0, callback: function() {
                $('#section3 .bottom').addClass('scrolled');
            }
        },
        {
            selector: '#section4 .bottom', offset: 0, callback: function() {
                $('#section4 .bottom').addClass('scrolled');
            }
        },
        {
            selector: '#section5 .bottom', offset: 0, callback: function() {
                $('#section5 .bottom').addClass('scrolled');
            }
        }
    ];


    Materialize.scrollFire(options);

});
       