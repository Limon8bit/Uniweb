var hoverCheck = false;

$(' .block ').hover(function(){
    $( this ).find('.block-menu').css({
        'display': 'flex',
    })
}, function(){
    if(hoverCheck){
        $( this ).find('.block-menu').css({
            'display': 'flex',
        })
    } else {
        $( this ).find('.block-menu').hide();
    }
})
