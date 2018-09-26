/**
 * Created by zengjiahao on 2018/8/10.
 */

//入口函数
$(function () {

    //NBA广告移入事件
    $('.top-ad').on('mouseenter', function () {
        $('.nba-ad').show();
        $('.top-nav').hide();
        $('.logo').css('zIndex',10);
    })

    //NBA广告移出事件
    $('.nba-ad').on('mouseleave', function () {
        $('.nba-ad').hide();
        $('.top-nav').show();
        $('.logo').css('zIndex',0);
    })

    //手游导航交互
    $('.rank-item').on('mouseenter', function () {
        $(this).siblings('.rank-item').css('height','27px')
        $(this).css('height','97px').addClass('current').siblings('.rank-item').removeClass('current');
    })

    $('.rank-item').on('mouseleave', function () {
        $(this).css('height','97px');
    })

    //手游栏互斥事件
    $('.col-body1').on('mouseenter','.rank-item', function () {
        $('.col-body2 .rank-item').removeClass('current').css('height','27px');;
    })

    $('.col-body2').on('mouseenter','.rank-item', function () {
        $('.col-body1 .rank-item').removeClass('current').css('height','27px');;
    })
    
    //顶部导航移入事件
    $('.top-nav2').on('mouseenter', function () {
        $('.game-list').show();
        $('.top-nav2').addClass('colorchange');
        $('.top-nav2 i').css('backgroundPositionX','-170PX');
    })

    $('.top-nav2').on('mouseleave', function () {
        $('.game-list').hide();
        $('.top-nav2').removeClass('colorchange');
        $('.top-nav2 i').css('backgroundPositionX','-150PX');
    })

    $('.game-list').on('mouseenter', function () {
        $('.game-list').show();
        $('.top-nav2').addClass('colorchange');
        $('.top-nav2 i').css('backgroundPositionX','-170PX');
    })

    $('.game-list').on('mouseleave', function () {
        $('.game-list').hide();
        $('.top-nav2').removeClass('colorchange');
        $('.top-nav2 i').css('backgroundPositionX','-150PX');
    })

    //滚动事件
    //获得顶部top的高度
    var topHeight = $('#top').height();
    console.log(topHeight);
    $(window).on('scroll', function () {
        //时刻获取页面的scrollTop的值
        var scrollTopValue = $(this).scrollTop();
        //判断这个值是否大于top的高度
        if(scrollTopValue > topHeight){
            $('.top-menu').css({
                position:'fixed',
                top:0,
                left:0
            });
        }else{
            $('.top-menu').css({
                position:'absolute',
                top:topHeight,
                left:0,
                zIndex:9
            });
            $('.video-warp').css({
                marginTop:0
            })
        }
    })
    //轮播图
    var index = 0;//记录页码

    var imgWidth = $('.lb_sizes').width();//记录图片宽度
    console.log(imgWidth);
    $('.flex-direction-nav .flex-next').on('click', function () {
        if(index == $('.lb_sizes').length-1){
            index = 0;
            $('.slides').css({
                left: 0
            });
        }
        index++;
        $('.slides').stop(true,false).animate({
            left: -index*imgWidth
        },200,'swing')

        $('.flex-control-nav a').removeClass('flex-active').eq(index).addClass('flex-active').siblings();

        if(index == $('.lb_sizes').length-1){
            $('.flex-control-nav a')[0].className = 'flex-active';
        }

    })

    $('.flex-direction-nav .flex-prev').on('click', function () {
        if(index == 0){
            index = $('.lb_sizes').length-1;
            $('.slides').css({
                left: -index*imgWidth
            });
        }
        index--;
        $('.slides').stop(true,false).animate({
            left: -index*imgWidth
        },200,'swing')

        $('.flex-control-nav a').removeClass('flex-active').eq(index).addClass('flex-active').siblings();
    })

    //导航栏点击跳转
    $('.flex-control-nav li').on('click', function () {
        $('.flex-control-nav a').removeClass('flex-active');
        $(this).children('a').addClass('flex-active');
        //var $aList = $(this).siblings('li').children('a');
        //for(var i =0;i<$aList.length;i++){
        //    $($aList[i]).removeClass('flex-active');
        //}
        index = $(this).index();
        console.log(index);
        $('.slides').stop(true,false).animate({
            left: -index*imgWidth
        },200,'swing')
        move = false;
})
//
//需求分析:鼠标移入时

////////导航栏移入事件
$('.flex-control-nav a').on('mouseenter', function () {
    //if(!$(this).hasClass('flex-active')){
    //    $(this).stop(true,false).animate({
    //        backgroundPositionX: '-38px',
    //        backgroundPositionY: '-320px'
    //    },200,'swing')
    //}

    $(this).addClass('flex-active-move')
})
////////
//////////导航栏移出事件
$('.flex-control-nav a').on('mouseleave', function () {
    //if(!$(this).hasClass('flex-active')){
    //    $(this).stop(true,false).animate({
    //        backgroundPositionX: '0px',
    //        backgroundPositionY: '-320px'
    //    },200,'swing')
    //}
    $(this).removeClass('flex-active-move')
})


//自动轮播
var timeID = null;
timeID =setInterval(function () {
    $('.flex-direction-nav .flex-next').trigger('click');
},1000)

//停止轮播
$('.ts-box').on('mouseenter', function () {
    clearInterval(timeID)
})

//开启自动轮播
$('.ts-box').on('mouseleave', function () {
    timeID =setInterval(function () {
        $('.flex-direction-nav .flex-next').trigger('click');
    },1000)
})




})
