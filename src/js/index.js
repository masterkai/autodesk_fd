$(function() {
    $("#GOTOP").click(function() {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 400)
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 120) {
            $("#GOTOP").fadeIn(300).addClass("active")
        } else {
            $("#GOTOP").stop().fadeOut(300).removeClass("active")
        }
    });
    $(".KV").click(function() {
        $("html,body").animate({
            scrollTop: $(".action").offset().top + 35
        }, 500)
    })
});