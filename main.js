$(".c-menu").on("click",function(){
    $(this).addClass("is-active");
    $(".p-sidebar").addClass("is-active");
    $(".c-menu--close").addClass("is-active");
    $(".c-menubg").addClass("is-active");
    $("body").addClass("is-active");
});

$(".c-menu--close").on("click",function(){
    $(this).removeClass("is-active");
    $(".p-sidebar").removeClass("is-active");
    $(".c-menu").removeClass("is-active");
    $(".c-menubg").removeClass("is-active");
    $("body").removeClass("is-active");
});

// const mediaQuery = window.matchMedia('(min-width: 1024px)');
// if (mediaQuery.matches) {
//    removeClass( 'is-active' );
// }

// const size = $(window).width();
// if (size >= 1024) {
//     removeClass("is-active");
// } else {
//     console.log("wow");
// }

// $( window ).resize( () => {
//     let x = $(window).width();
//     let y = 1024;
//     if (x <= y) {
//         $('body').removeClass('is-active');
//     }else{
//         $('body').addClass('is-active');
//     }
// });


$(window).resize(function () {
    $(".p-sidebar").removeClass("is-active");
    $(".c-menu").removeClass("is-active");
    $(".c-menubg").removeClass("is-active");
    $("body").removeClass("is-active");
});



// if (window.matchMedia("(min-width: 1024px)").matches) {
//     /* ビューポートの幅が 400 ピクセル以上の場合のコードをここに */
//     window.removeClass("is-active");
//   } else {
//     /* ビューポートの幅は 400 ピクセル未満の場合のコードをここに */
//     console.log("エラー");
//   }
  


// $(window).width("(min-width: 1024px)", function (){
//     $("body").removeClass("is-active");
// });