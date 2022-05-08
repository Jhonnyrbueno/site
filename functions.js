$(document).ready(function () {
    $("body").append("<a href='#' class='back-to-top'><i class='fa fa-arrow-circle-up' aria-hidden='true'></i></a>"),
        $(function toTop() {
            $(window).scroll(function () {
                $(this).scrollTop() > 400 ? $(".back-to-top").fadeIn() : $(".back-to-top").fadeOut()
            }), $(".back-to-top").click(function () {
                return $("html, body").animate({
                    scrollTop: 0
                }, 900), !1
            })
        });
})