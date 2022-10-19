// Нажатие кнопки в верхушке хэдера (открытие и сокрытие подконтрольного меню)

$('.header-top-menu-button').click(function(){
    $(this).find('form').css({
        'display': 'flex',
    })
})

$(document).mouseup(function(e) {
    var container = $(".header-top-menu-button").find('form');
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

// Обработка взаимодействия с меню компетенций
$('.header-top-menu-button-request-wrap-competition').click(function(){
    $('.header-top-menu-button-request-wrap-competition-menu').css({
        'display': 'flex',
    })
})

$( '.header-top-menu-button-request-wrap-competition-menu__item' ).click(function(){
    var value = $.trim($(this).text());
    $( '.header-top-menu-button-request-wrap-competition' ).val(value);
})

$(document).mouseup(function(e) {
    var container = $(".header-top-menu-button-request-wrap-competition-menu");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});


$('.header-top-menu-button-resume-wrap-competition').click(function(){
    $('.header-top-menu-button-resume-wrap-competition-menu').css({
        'display': 'flex',
    })
})

$( '.header-top-menu-button-resume-wrap-competition-menu__item' ).click(function(){
    var value = $.trim($(this).text());
    $( '.header-top-menu-button-resume-wrap-competition' ).val(value);
})

$(document).mouseup(function(e) {
    var container = $(".header-top-menu-button-resume-wrap-competition-menu");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

// Обработка взаимодействия с меню графика
$('.header-top-menu-button-request-wrap-work_period').click(function(){
    $('.header-top-menu-button-request-wrap-work_period-menu').css({
        'display': 'flex',
    })
})

$( '.header-top-menu-button-request-wrap-work_period-menu__item' ).click(function(){
    var value = $.trim($(this).text());
    $( '.header-top-menu-button-request-wrap-work_period' ).val(value);
})

$(document).mouseup(function(e) {
    var container = $(".header-top-menu-button-request-wrap-work_period-menu");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});