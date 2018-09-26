/**
 * Created by Alex on 2018/8/14.
 */

//µã»÷µÇÂ¼´ò¿ªÒ³Ãæ
$('#unlogin').on('click',function(){
    $('#login-web').show();
})


    //µÇÂ¼Ò³´ò¿ª
$('#header .login').on('click', function () {
    $('#cover-bg').show();
    $('#login-web').show();
})



//µÇÂ¼Ò³¹Ø±Õ
$('.login-header .close').on('click', function () {
    $('#cover-bg').hide();
    $('#login-web').hide();
})

//µÇÂ¼Ò³¶¯»­
$('#login-web .qr-box>img').on('mouseenter', function () {
    $('#login-web .qr-box').stop(true,false).animate({
        left:'-70px'
    },150,'swing', function () {
        $('#login-web .scan').stop(true,false).animate({
            opacity:'1'
        },150,'swing')
    })
})

$('#login-web .qr-box>img').on('mouseleave', function () {
    $('#login-web .scan').stop(true,false).animate({
        opacity:'0'
    },150,'swing', function () {
        $('#login-web .qr-box').stop(true,false).animate({
            left:'0'
        },150,'swing')
    })
})
