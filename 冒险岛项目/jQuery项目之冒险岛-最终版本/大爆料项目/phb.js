/*
** Create by zhangda on 2018/8/13
*/

//顶栏鼠标交互
$(function (  ) {
    $('.zh-nba').on('mouseenter', function (  ) {
        $('#zh-bigNba').show( ).css('zIndex',3000);
        $('.zh-tgplogo').css('zIndex', 2000);
    })  //NBA图片事件

    $('.zh-nba').on('mouseleave',function (  ) {
        $('#zh-bigNba').hide( );
    })

    var defaultColor = null
    $('.zh-nav li:odd').on('mouseenter', function (  ) {
        defaultColor = $ ( this ).find ( "a" ) .css('color');
        $ ( this ).find ( "a" ) .css('color' , '#fff')
    }) //导航栏事件

    $('.zh-nav li:odd').on('mouseleave', function (  ) {
        $ ( this ).find ( "a" ).css('color' , defaultColor)
    })

//    排行榜鼠标移入事件

    $('#zh-pxb').on('mouseenter' , function (  ) {
        defaultColor = $ ( this ).children( "a" ) .css('color');
        $ ( this ).children( "a" ) .css('color' , 'red');
        $(this).find('#zh-ph').css('background-position','-170px -134px')
        $('#zh-gameRank').show( )
    })

    $('#zh-pxb').on('mouseleave', function (  ) {
        $ ( this ).children( "a" ).css('color' , defaultColor);
        $(this).find('#zh-ph').css('background-position','-150px -134px');
        $('#zh-gameRank').hide( )
    })

    $('#zh-gameRank .zh-nGame .nGameList li').on('mouseenter', function (  ) {
        $(this).addClass('screenPH');
        $(this).siblings(this).removeClass('screenPH');
        $(this).children('img').show( );
        $(this).siblings(this).children('img').hide( );
        $(this).children('.download-h').show( );
        $(this).siblings(this) .children('.download-h').hide( );
    })

    var $phoneList = $('#phoneGame li')
    $('#phoneGame li').on('mouseenter', function (  ) {
        $(this).addClass('screenPH');
        // console.log ( $phoneList )
        for(var i = 0;i<$phoneList.length;i++){
            if (  this == $phoneList[i]) {
                this.className = 'screenPH'
                $($phoneList[i]).children('img').show( );
                $($phoneList[i]).children('.download-h').show( );
            }else{
                $phoneList[i].className = '';
                $($phoneList[i]).children('img').hide( );
                $($phoneList[i]).children('.download-h').hide( )
            }
        }


    })

    $('#phoneGame li .iconfont').on('mouseenter' , function (  ) {
        defaultColor1 = $ ( this ).css('color');
        $(this).css('color','red');
    })


    $('#phoneGame li .iconfont').on('mouseleave' , function (  ) {
        $(this).css('color',defaultColor1);
    })
})