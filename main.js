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

$(window).resize(function () {
    $(".p-sidebar").removeClass("is-active");
    $(".c-menu").removeClass("is-active");
    $(".c-menubg").removeClass("is-active");
    $("body").removeClass("is-active");
});