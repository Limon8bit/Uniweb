var check = false;

$( '.get_staff-form_wrap-competition .wrap input' ).click(function(){
    check = !check;
    if(check){
        $( '.get_staff-form_wrap-competition-select' ).css({
            'display': 'flex',
        })
    } else {
        $( '.get_staff-form_wrap-competition-select' ).hide()
    }
})

$( '.get_staff-form_wrap-competition .wrap img' ).click(function(){
    check = !check;
    if(check){
        $( '.get_staff-form_wrap-competition-select' ).css({
            'display': 'flex',
        })
    } else {
        $( '.get_staff-form_wrap-competition-select' ).hide()
    }
})

$(document).mouseup(function(e) {
    var container = $(".get_staff-form_wrap-competition-select");
    if (container.has(e.target).length === 0){
        check = false;
        container.hide();
    }
});

$( '.get_staff-form_wrap-competition-select__option' ).click(function(){
    var value = $.trim($(this).text());
    var text = $.trim($( '.get_staff-form_wrap-competition-input' ).val());
    $(this).text(text);
    $( '.get_staff-form_wrap-competition-input' ).val(value);
})