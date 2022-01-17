$(document).ready(function() {
    /** script gauge**/
    // check if element is visible after scrolling
    var done = false;

    $(window).on('scroll', function() {

        if (($(window).scrollTop() + $(window).outerHeight() > $('.progress-number-mark').offset().top) && !done) {

            var today = new Date();
            var dd = today.getDate().toString();
            if(dd < 10){ dd = '0' + dd; }
            var mm = (today.getMonth() + 1).toString();
            if(mm < 10){ mm = '0' + mm; }
            yy = today.getFullYear().toString();

            date = yy + mm + dd;
        
            target = 500000;
            var $montant = 0;

            if (date >= 20211011 && date < 20211119) {
                $montant = 200000;
                ratio = (200000 * 100) / target + "%";
            } else if (date >= 20211119 && date < 20211122) {
                $montant = 231430;
                ratio = (231430 * 100) / target + "%";
            } else if (date >= 20211122 && date < 20211129) {
                $montant = 253805;
                ratio = (253805 * 100) / target + "%";
            } else if (date >= 20211129 && date < 20211206) {
                $montant = 296780;
                ratio = (296780 * 100) / target + "%";
            } else if (date >= 2021126 && date < 20211213) {
                $montant = 332925;
                ratio = (332925 * 100) / target + "%";
            } else if (date >= 20211213 && date < 20211220) {
                $montant = 355110;
                ratio = (355110 * 100) / target + "%";
            } else if (date >= 20211220 && date < 20211227) {
                $montant = 408310;
                ratio = (408310 * 100) / target + "%";
            } else if (date >= 20211227 && date < 20211230) {
                $montant = 443460;
                ratio = (443460 * 100) / target + "%";
            } else if (date >= 20211230 && date < 20220101) {
                $montant = 487235;
                ratio = (487235 * 100) / target + "%";
            } else if (date >= 20220101) {
                $montant = 500000;
                ratio = (500000 * 100) / target + "%";
                jQuery('.span-col').text('Collectées');
            }
            setTimeout(function() {
                function numberWithSpaces(x) {
                    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                }
                jQuery('.progress_inner').css({
                    height: ratio
                });
                jQuery('.progress .progress-number-mark').css({
                    bottom: ratio
                });

                var $this = $('.span-prt'),
                    countTo = $montant;
                //if ($this.hasClass('end')) return;

                $({
                    countNum: 0
                }).animate({
                    countNum: countTo
                }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum) + "€");
                    },
                    complete: function() {
                        $this.text(numberWithSpaces(this.countNum) + "€");
                        $this.addClass('end');
                        done = true;
                        if ($this.text() == '500 000€') {
                            $this.text('');
                        }
                    }
                });

            });
        }

    });
    /** fin  script gauge**/

    /* slick script */
    $('.sliderProject').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 15000,
        responsive: [{
            breakpoint: 9999,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrow: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                nextArrow: '<div class="rightArrows"><i class="fa fa-angle-right"></i></div>',
                prevArrow: '<div class="leftArrows"><i class="fa fa-angle-left"></i></div>'
            }
        }, {
            breakpoint: 769,
            settings: "unslick"
        }]
    });

    $('.sliderTypeDon').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3500,
        responsive: [{
            breakpoint: 9999,
            settings: "unslick"
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrow: true,
                nextArrow: '<div class="rightArrows"><i class="fa fa-angle-right"></i></div>',
                prevArrow: '<div class="leftArrows"><i class="fa fa-angle-left"></i></div>'
            }
        }]
    });

    $('.CadrepourcentageDon').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 9999,
            settings: "unslick"
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrow: true,
                nextArrow: '<div class="rightArrows"><i class="fa fa-angle-right"></i></div>',
                prevArrow: '<div class="leftArrows"><i class="fa fa-angle-left"></i></div>'
            }
        }]
    });
    /** fin slick script */

    /** ammount calc**/

    $(".fiscale_text_error").hide();
    $(".amount1").click(function() {
        $(".amount").removeClass("amount_active");
        $(this).addClass("amount_active");
        $("#fiscale").text("17");
        $(".fiscale_text_error").hide();
        $(".fiscale_text").show();
        $(".free_amount").val("");
        $(".under_fiscale").show();
    });
    $(".amount2").click(function() {
        $(".amount").removeClass("amount_active");
        $(this).addClass("amount_active");
        $("#fiscale").text("51");
        $(".fiscale_text_error").hide();
        $(".fiscale_text").show();
        $(".free_amount").val("");
        $(".under_fiscale").show();
    });
    $(".amount3").click(function() {
        $(".amount").removeClass("amount_active");
        $(this).addClass("amount_active");
        $("#fiscale").text("102");
        $(".fiscale_text_error").hide();
        $(".fiscale_text").show();
        $(".free_amount").val("");
        $(".under_fiscale").show();
    });
    $(".amount4").click(function() {
        $(".amount").removeClass("amount_active");
        $(this).addClass("amount_active");
        $("#fiscale").text("170");
        $(".fiscale_text_error").hide();
        $(".fiscale_text").show();
        $(".free_amount").val("");
        $(".under_fiscale").show();
    });
    $(".free_amount").click(function() {
        $(".amount").removeClass("amount_active");
        $(this).addClass("amount_active");
        $("#fiscale").text("0");
        $(".fiscale_text_error").hide();
        $(".fiscale_text").show();
        $(".under_fiscale").show();
    });
    $(".free_amount").keyup(function() {
        if ($(".free_amount").val() > 66667) {
            $(".fiscale_text_error").show();
            $(".fiscale_text").hide();
            $(".under_fiscale").hide();
        }
        if ($(".free_amount").val() <= 66667) {
            var numObj = $(".free_amount").val() * 0.34;
            var noDecimal = numObj.toFixed();
            $("#fiscale").text(noDecimal);
            $(".fiscale_text_error").hide();
            $(".fiscale_text").show();
            $(".under_fiscale").show();

        }
    });
    /** ammount calc**/

});