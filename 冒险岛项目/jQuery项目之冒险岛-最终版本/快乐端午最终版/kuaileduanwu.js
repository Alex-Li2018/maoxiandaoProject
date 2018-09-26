/**
 * Created by Administrator on 2018/8/11.
 */
//g-header
$(function(){
  //header
  $('.g-menu-r').on('mouseenter',function (){
    $('#bQrbox').css('display','block')
  })
  $('.g-menu-r').on('mouseleave',function (){
    $('#bQrbox').css('display','none')
  })

  //cont
  $('.kv a').on('mouseenter', function () {
     $(this).css('background-position-y','-207px')
  })

  $('.kv a').on('mouseleave', function () {
    $(this).css('background-position-y','0px')
  })
  //TOP-left

  $('#ost_g').on('mouseenter',function (){
    $(this).hide().siblings('#ost_d').show()
  })
  $('#ost_d').on('mouseleave',function (){

    $('#ost_g').show().siblings('#ost_d').hide()

  })

  //top-right
  var colors=null
  $('.ost_czsh>a').on('mouseenter',function (){
    colors= $('.ost_czsh>a').css('color')
    $('.ost_czsh>a').css('color','#ff4e00')
  })
  $('.ost_czsh>a').on('mouseleave',function (){
    $('.ost_czsh>a').css('color',colors)
  })
   var col=null
  $('.ost_title').on('mouseenter',function (){
    col= $('.ost_title').css('color')
    $('.ost_title').css('color','#ff4e00')
    $('.ost_title>.ost_icon_arrow ').css('background-position-x','-170px')
  })
  $('.ost_title').on('mouseleave',function (){
    $('.ost_title').css('color',col)
    $('.ost_title>.ost_icon_arrow ').css('background-position-x','-150px')
  })
  $('.ost_total #ost_t').on('mouseenter',function (){
    $('#game_rank').show()
  }).on('mouseleave',function (){
    $('#game_rank').hide()
  })
  $('#game_rank').on('mouseenter',function (){
    $('#game_rank').show()
  })
  $('#game_rank').on('mouseleave',function (){
    $('#game_rank').hide()
  })

//top youxipaihang

  var bordercolor=null
  var bgcolor=null
  var tcolor=null
  var tacolor=null

  $('.col-one>li').on('mouseenter',function (){
    $('#game_rank .col-one>li').children('.rank-game-cover').hide()
    bordercolor=$(this).children('span').css('border-color')
    bgcolor=$(this).children('span').css('background-color')
    tcolor=$(this).children('span').css('color')
    tacolor=$(this).children('a').css('color')
    $(this).children('.rank-game-cover').show()
    $(this).children('a').css('color','#ff4e00')
    $(this).children('span').css({
      'border-color':'#ff4e00',
      'background-color': '#ff4e00',
      'color': '#fff',
    })
  }).on('mouseleave',function (){
    $(this).children('.rank-game-cover').hide()
    $(this).children('a').css('color',tacolor)
    $(this).children('span').css({
      'border-color':bordercolor,
      'background-color': bgcolor,
      'color': tcolor,
    })
  })
  $('.col-two>li').on('mouseenter',function (){
    $('#game_rank .col-two>li').children('.rank-game-cover').hide()
    bordercolor=$(this).children('span').css('border-color')
    bgcolor=$(this).children('span').css('background-color')
    tcolor=$(this).children('span').css('color')
    tacolor=$(this).children('a').css('color')
    $(this).children('.rank-game-cover').show()
    $(this).children('a').css('color','#ff4e00')
    $(this).children('span').css({
      'border-color':'#ff4e00',
      'background-color': '#ff4e00',
      'color': '#fff',
    })
  }).on('mouseleave',function (){
    $(this).children('.rank-game-cover').hide()
    $(this).children('a').css('color',tacolor)
    $(this).children('span').css({
      'border-color':bordercolor,
      'background-color': bgcolor,
      'color': tcolor,
    })
  })

  $('.col-tr>li').on('mouseenter',function (){
    $('#game_rank .col-tr>li').children('.rank-game-cover').hide()
    bordercolor=$(this).children('span').css('border-color')
    bgcolor=$(this).children('span').css('background-color')
    tcolor=$(this).children('span').css('color')
    tacolor=$(this).children('a').css('color')
    $(this).children('.rank-game-cover').show()
    $(this).children('a').css('color','#ff4e00')
    $(this).children('span').css({
      'border-color':'#ff4e00',
      'background-color': '#ff4e00',
      'color': '#fff',
    })
  }).on('mouseleave',function (){
    $(this).children('.rank-game-cover').hide()
    $(this).children('a').css('color',tacolor)
    $(this).children('span').css({
      'border-color':bordercolor,
      'background-color': bgcolor,
      'color': tcolor,
    })
  })



  var ttcolor=null
  $('.game-meta>a').on('mouseenter',function (){
    ttcolor=$(this).css('color')
    $(this).css('color','#ff4e00')
    $(this).children('i').css('background-position-y','-97px')

  }).on('mouseleave',function (){
        $(this).css('color',ttcolor)
        console.log($(this))
        $(this).children('i').css('background-position-y','-80px')
  })


  //µÇÂ¼Ò³´ò¿ª
  $('.g-header #unlogin').on('click', function () {
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
      left:'-20px'
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


})