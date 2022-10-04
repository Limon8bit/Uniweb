var check = false;

$( '.get_staff-form_wrap-competition-input' ).click(function(){
    check = !check;
    if(check){
        $( '.get_staff-form_wrap-competition-select' ).css({
        'display': 'flex',
        })
    } else {
        $( '.get_staff-form_wrap-competition-select' ).css({
            'display': 'none',
        })
    }
})

$( '.get_staff-form_wrap-competition-select__option' ).click(function(){
    var value = $.trim($(this).text());
    var text = $.trim($( '.get_staff-form_wrap-competition-input' ).val());
    $(this).text(text);
    $( '.get_staff-form_wrap-competition-input' ).val(value);
    check = !check;
    $( '.get_staff-form_wrap-competition-select' ).css({
        'display': 'none',
    })
})