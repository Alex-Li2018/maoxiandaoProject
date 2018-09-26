/*
** Create by zhangda on 2018/8/8
*/

//顶栏鼠标交互
$(function (  ) {
    $('.zh-nba').on('mouseenter', function (  ) {
        $('#zh-bigNba').show( ).css('zIndex',1);
        $('.zh-tgplogo').css('zIndex', 2);
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

    $('.qr-box').on('mouseenter' , function (  ) {
        $('#QRbigbox').show( )
    })

    $('.qr-box').on('mouseleave' , function (  ) {
        $('#QRbigbox').hide( )
    })

    var $flower =  $('.zh-main .linkNav i');
    var d = 0;
    var timeID = null
    function autoRotate( ) {
        timeID = setInterval(function (  ) {
            d += 1
            $flower.css('transform' , 'rotate('+d+'deg)')
        },30)
    }


    $('#a1').animate( {
        'left' : 120,
        'top' : 0
    },1500)

    $('#a2').animate({
        'left' : 300,
        'top' : 130
    },1500)

    $('#a3').animate({
        'left' : 603,
        'top' : 16
    },1500)

    $('#a4').animate({
        'left' : 700,
        'top' : 130
    },1500)

    $('#a5').animate({
        'left' : 909,
        'top' : 9
    },1500)

    $('#a6').animate({
        'left' : 88,
        'top' : 300
    },1500)

    $('#a7').animate({
        'left' : 330,
        'top' : 340
    },1500)

    $('#a8').animate({
        'left' : 620,
        'top' : 310
    },1500)

    $('#a9').animate({
        'left' : 910,
        'top' : 330
    },1500)

        autoRotate() ; //图片自动旋转


    $('.zh-main .mainLink a').on('mouseenter',function (  ) {
        $(this).children('i').addClass('flowerPink')
    })

    $('.zh-main .mainLink a').on('mouseleave',function (  ) {
        $(this).children('i').removeClass('flowerPink')
    })

    $('#login-user').on('click' ,function  (  ) {
        $('#loginform').show()
        $('#connect').animate({
            'font-size' : '100px'
        },1000)
        $('#keepOut').show();
        unScroll()

    })

    $('#loginform').on('mouseenter',function (  ) {
        $('#or a').text('关闭');
        $('#connect').css('color','pink');
    })

    $('#loginform').on('mouseleave',function (  ) {
        $('#or a').text('or');
        $('#connect').css('color','skyblue');
    })

    $('#or').on('click',function (  ) {
        $('#loginform').hide();
        $('#keepOut').hide();
        removeUnScroll()
        $('#connect').css('font-size','12px')
    })


    //滚动条事件禁止函数

    function unScroll() {
        var top = $(document).scrollTop();
        $(document).on('scroll.unable',function (e) {
            $(document).scrollTop(top);
        })
    }


    function removeUnScroll() {
        $(document).unbind("scroll.unable");
    }


})







