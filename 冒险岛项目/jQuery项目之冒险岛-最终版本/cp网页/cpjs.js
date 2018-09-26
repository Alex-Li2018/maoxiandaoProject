/**
 * Created by lenovo on 2018/8/13.
 */
$(function (){
  $('#boss').on('mouseenter',function (){
    $('#topTit').css('display','block');
  });
  $('#boss').on('mouseleave',function (){
    $('#topTit').css('display','none');
  })

  $('#niubi').on('mouseenter',function (){
    $('#box1').css('display','block');
  });

  $('#niubi').on('mouseleave',function (){
    $('#box1').css('display','none');
  })
//222

  $('#ulBg a').on('mouseenter',function (){
    var bgTop= parseInt($(this).css('top')) ;
    $(this).eq(1).css('top',bgTop)
    $(this).stop(true,false).animate({
      top:bgTop+10
    },200).on('mouseleave',function (){
      $(this).stop(true,false).animate({
        top:bgTop
      },200);

    });
  });
//

   setInterval(function (){
     //console.log($('#aBoss').css('top'));
      var aBossTop=parseInt($('#aBoss').css('top'));
     $('#aBoss').animate({
      top:aBossTop+5
    },500).animate({
       top:aBossTop
     },500)
   },1000)
















});