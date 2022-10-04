
var hoverCheck = false;

$(' .block ').focusin(function(){
    $( this ).find('.block-menu').css({
        'display': 'flex',
    })
})

$(' .block ').focusout(function(){
    if (!hoverCheck) {
        $( this ).find('.block-menu').css({
            'display': 'none',
        })
    }
})

$(' .block-menu ').hover(
    function(){
        hoverCheck = true;
        return hoverCheck;
    }, function(){
        hoverCheck = false;
        return hoverCheck;
    }
)