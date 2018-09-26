// var small = document.getElementById('small');
// var big1 = document.getElementById('big1')
// var big2 = document.getElementById('big2')
// small.onmouseover = function() {
//     console.log(11)
//    big1.style.display = 'block';
//    big2.style.display = 'block';
// }
// small.onmouseout = function() {
//     big1.style.display = 'none';
//     big2.style.display = 'none';
$ ( function () {
    $ ( "#small" ).on ( "mouseenter", function () {
        $ ( "#box" ).show ()
        $ ( "#big1" ).show ()
        $ ( "#big2" ).show ()
    } )
    $ ( "#small" ).on ( "mouseleave", function () {
        $ ( "#box" ).hide ()
        $ ( "#big1" ).hide ()
        $ ( "#big2" ).hide ()
    } )
    $ ( "#p1" ).on ( "mouseenter", function () {
        $ ( "#p1" ).stop ( true, false ).animate ( {
            bottom : 10
        } )
    } )
    $ ( "#p1" ).on ( "mouseleave", function () {
        $ ( "#p1" ).stop ( true, false ).animate ( {
            bottom : 0
        } )
    } )
    $ ( "#p2" ).on ( "mouseenter", function () {
        $ ( "#p2" ).stop ( true, false ).animate ( {
            bottom : 10
        } )
    } )
    $ ( "#p2" ).on ( "mouseleave", function () {
        $ ( "#p2" ).stop ( true, false ).animate ( {
            bottom : 0
        } )
    } )
    $ ( "#p3" ).on ( "mouseenter", function () {
        $ ( "#p3" ).stop ( true, false ).animate ( {
            bottom : 10
        } )
    } )
    $ ( "#p3" ).on ( "mouseleave", function () {
        $ ( "#p3" ).stop ( true, false ).animate ( {
            bottom : 0
        } )
    } )
    $ ( "#a1" ).on ( "mouseenter", function () {
        $ ( "#a1" ).stop ( true, false ).animate ( {
            bottom : 10
        } )
    } )
    $ ( "#a1" ).on ( "mouseleave", function () {
        $ ( "#a1" ).stop ( true, false ).animate ( {
            bottom : 0
        } )
    } )
    $ ( "#a2" ).on ( "mouseenter", function () {
        $ ( "#a2" ).stop ( true, false ).animate ( {
            bottom : 10
        } )
    } )
    $ ( "#a2" ).on ( "mouseleave", function () {
        $ ( "#a2" ).stop ( true, false ).animate ( {
            bottom : 0
        } )
    } )
    $ ( "#a3" ).on ( "mouseenter", function () {
        $ ( "#a3" ).stop ( true, false ).animate ( {
            bottom : 10
        } )
    } )
    $ ( "#a3" ).on ( "mouseleave", function () {
        $ ( "#a3" ).stop ( true, false ).animate ( {
            bottom : 0
        } )
    } )
    $ ( "#a4" ).on ( "mouseenter", function () {
        $ ( "#a4" ).stop ( true, false ).animate ( {
            bottom : 10
        } )
    } )
    $ ( "#a4" ).on ( "mouseleave", function () {
        $ ( "#a4" ).stop ( true, false ).animate ( {
            bottom : 0
        } )
    } )
    $ ( "#a5" ).on ( "mouseenter", function () {
        $ ( "#a5" ).stop ( true, false ).animate ( {
            bottom : 10
        } )
    } )
    $ ( "#a5" ).on ( "mouseleave", function () {
        $ ( "#a5" ).stop ( true, false ).animate ( {
            bottom : 0
        } )
    } )
    $ ( "#a6" ).on ( "mouseenter", function () {
        $ ( "#a6" ).stop ( true, false ).animate ( {
            bottom : 10
        } )
    } )
    $ ( "#a6" ).on ( "mouseleave", function () {
        $ ( "#a6" ).stop ( true, false ).animate ( {
            bottom : 0
        } )
    } )
    $ ( "#ti" ).on ( "mouseenter", function () {
        $ ( "#menu" ).show();
    } )
    $ ( "#ti" ).on ( "mouseleave", function () {
        $ ( "#menu" ).hide();
    } )
} )