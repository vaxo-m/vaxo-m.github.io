$(document).ready(function() {
    $(".fc-other-month").css("background-color", "#fcfcfc").text("");
    $(".fc-button-group button").click(function() {
        $(".fc-other-month").text("");
    });

    $('.nav-bar li').not(":first").mouseover(function() {
        $('.nav-bar li').find('div').remove();
            $(this).append("<div class='under'><div class='arrow-up'></div> </div>")
    });

    $('.nav-bar li').mouseleave(function() {
        $('.nav-bar li').find('div').remove();

    });

});
