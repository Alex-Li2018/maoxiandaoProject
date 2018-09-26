/**
 * Created by Administrator on 2018/8/12.
 */
 $(function(){
  $('.ost_g>a').on('mouseenter',function(){
      $('.ost_gimg').css( 'display', 'block');
      //$('.ost_gimg').attr( 'display', 'block');
  });

     $('.ost_gimg').on('mouseleave',function(){
        $('.ost_gimg').css( 'display', 'none');

    });

     $('.ost_czsh ').on('mouseenter',function(){
         $('.ost_czsh a ').css('color','red');
     });

     $('.ost_czsh ').on('mouseleave',function(){
         $('.ost_czsh a ').css('color','black');
     });


     $('.ost_title ').on('mouseenter',function(){
         $('.ost_title a ').css('color','red');
         $('.ost_title i ').css('background-position',' -170px -134px');

     });

     $('.ost_title ').on('mouseleave',function(){
         $('.ost_title a ').css('color','black');
         $('.ost_title i ').css('background-position',' -150px -134px');
     });

     $('.g-menu-1  .abtn').on('mouseenter',function(){
       $(this).children('i').css('color','white');
     })

     $('.g-menu-1  .abtn').on('mouseleave',function(){
         $(this).children('i').css('color','#b0b0b0');
     })

     $('.qrBox').on('mouseenter',function(){
         $('.bQrbox').css('display','block');
     })

     $('.bQrbox').on('mouseleave',function(){
         $('.bQrbox').css('display','none');
        // $('.bQrbox').attr('display','none');
     })







 })