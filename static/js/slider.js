var bgs = [
    'url(./static/images/slider/1.png)',
    'url(./static/images/slider/2.png)',
    'url(./static/images/slider/3.png)',
    'url(./static/images/slider/4.png)',
    'url(./static/images/slider/5.png)',
    'url(./static/images/slider/6.png)',
]

$('.header-dots__dot').click(function(){
    let id = $(this).attr('id');
    $('.header-dots__dot').removeClass('active_dot');
    $(this).addClass("active_dot");
    $('header').css({
        'background-image': bgs[id]
    })
})
