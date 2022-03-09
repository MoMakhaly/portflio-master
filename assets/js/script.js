$(document).ready(function () {
    ////sidebar

    $(window).scroll(function () {
        var sc = $(this).scrollTop();
        if (sc > 500) {
            $('.time').countTo();
            $(window).off("scroll");
            if (sc > 150) {
                $(".progress-bar-one").css({ "width": "85%" }, 3000);
                $(".progress-bar-two").css("width", "95%")
                $(".progress-bar-three").css("width", "970%")
            }
        }
        ////scroll top
        if (sc > 500) {
            $(".scroll-top").fadeIn()
        }
        else {
            $(".scroll-top").hide()
        }

        /////services
        $(".work-item").hover(function () {
            $(this).css("top", "-15px")
        }, function () {
            $(this).css("top", "0")
        });
        /////work
        $(".work-list li").click(function () {
            $(this).css("color", "#ff4c60").siblings().css("color", "#353353")
        })
        ////wow js


        ////posts
        $(".posts .card").hover(function () {
            $(this).css("top", "-10px")
        }, function () {
            $(this).css("top", "0")
        })
            ;
        // mix it up
        // $('.work-content').mixItUp();
        //owl carousel
        // var owl = $('.owl-carousel');
        // owl.owlCarousel({
        //     items: 1,
        //     loop: true,
        //     margin: 10,
        //     autoplay: true,
        //     autoplayTimeout: 1000,
        //     autoplayHoverPause: true
        // });
        ///morphext
        $("#js-rotating").Morphext({
            animation: "bounceIn",
            separator: ",",
            speed: 2000,
            complete: function () {
            }
        });
        //popup magnific
        $('.test-popup-link').magnificPopup({

            type: 'image'
        });
        ///validation
        $("#commentForm").validate();

    })
})
