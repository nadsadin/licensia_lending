
$(document).ready(function(){
    $('#slider').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('form').submit(function (e) {
        var form = $(this);
        var url = form.attr('action');
        $.ajax({
            type: 'POST',
            url: url,
            data: form.serialize(), // serializes the form's elements.
            success: function(data)
            {
                $('#modal .modal-body').html(data);
                $('#price_request').modal('hide');
                $('#modal').modal('toggle');
            }
        });
        e.preventDefault();
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var to_top = $('#scrolltop');

        if (scroll >= 500) {
            to_top.removeClass('d-none');
        } else {
            to_top.addClass('d-none');
        }
    });

    $('.easy-scroll').click(function(e){
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                }
            });
        }
    });

    $('.nav-close').click(function(e){

    });

});
