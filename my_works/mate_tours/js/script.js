$(document).ready(function() {



    $('.clicked').on('click', function(e) {
        var current = $(e.target).next();
        var show = current.hasClass('hidden');
        if (show) {
            current.hide();
            current.removeClass('hidden');
            current.slideDown('slow');
            $(this).fadeTo("slow", 0.33);
            $(this).text('დახურვა');
        } else {

            current.slideUp('slow', function() {
                current.addClass('hidden');
                current.slideUp('slow');
            });
            $(this).text('დაჯავშნა');
            $(this).fadeTo("slow", 1);
        }

    });
});
