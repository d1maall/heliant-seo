/**
 * Created by dmitry on 25.04.15.
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: false,
        anchors:['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen'],
        scrollOverflow: true,
        controlArrows: false,
        css3: true,
        scrollingSpeed: 700,
        easingcss3: 'ease',
        afterRender: function(){

            var fourHeight = Math.max.apply(Math, $('.four-block').map(function(){ return $(this).height(); }).get());
            $(".four-block").css("height", fourHeight);

            var w = $(".calc-block").width();

            $('.slider1').jRange({
                from: 15000,
                to: 250000,
                step: 5000,
                scale: ["15&nbsp;000&nbsp;р.","250&nbsp;000&nbsp;р."],
                format: "%s рублей",
                width: w-100,
                showLabels: false,
                theme: "theme-blue",
                onstatechange: function(){
                    $(".res").html($(".slider1").val() + " руб.");
                    $(".i-result").html($(".slider1").val() + " руб.");
                    $(".chart").css("height", $(".slider1").val()/1000);
                    $(".chart-right").css("height", ($(".slider1").val() * $(".slider2").val())/100000);
                    $(".res-right").html(($(".slider1").val()*$(".slider2").val())/100 + " руб.");
                    //($(".slider1").val());
                }
            });
            $('.slider2').jRange({
                from: 0,
                to: 100,
                step: 1,
                scale: ["0%","25%","50%","75%","100%"],
                format: '%s%',
                width: w-100,
                showLabels: false,
                theme: "theme-blue",
                onstatechange: function(){
                    $(".res-right").html(($(".slider1").val()*$(".slider2").val())/100 + " руб.");
                    $(".chart-right").css("height", ($(".slider1").val() * $(".slider2").val())/100000);
                    $(".vc-result").html($(".slider2").val() + "%");
                }
            });
            $('.slider3').jRange({
                from: 0,
                to: 100,
                step: 1,
                scale: [0,25,50,75,100],
                format: '%s',
                width: w-100,
                showLabels: false,
                theme: "theme-blue",
                onstatechange: function(){
                    $(".fc-result").html($(".slider3").val() + " руб.");
                }
            });
            $(".five-sm-block").height($(".five-big-block").height());

            var titleHeight = $(".three-row-1").height();

            $(".three-one-content").css("width", $(window).width() - 50);
            $(".three-one-content").css("left", 25);
            $(".three-one-content").css("min-height", $(window).height() - 150);
            $(".three-one-content").css("top", -5);

            $(".three-two-content").css("width", $(window).width() - 50);
            $(".three-two-content").css("left", $(window).width() + 25);
            $(".three-two-content").css("min-height", $(window).height() - 150);
            $(".three-two-content").css("top", -5);

            $(".three-three-content").css("width", $(window).width() - 50);
            $(".three-three-content").css("left", 2 * $(window).width() + 25);
            $(".three-three-content").css("min-height", $(window).height() - 150);
            $(".three-three-content").css("top", -5);

            $(".second-block").css("height", $(".three-one-content").height());
            $(".first-block").css("height", $(".three-one-content").height());
            $(".three-block-sm").css("margin-top",0.5 * $(".three-one-content").height());
            $(".s678-block-text").css("height", $(".s678-block-pic").height());
            $(".content-10-11").css("height", $(".ten-video").height());

            $(".left-arrow").click(function(){
                $.fn.fullpage.moveSlideLeft();
            });

            $(".right-arrow").click(function(){
                $.fn.fullpage.moveSlideRight();
            });

            $('.autoplay').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000
            });

            var mytwelvescreen = $(".twelve").height();
            var mytwelveform = $(".twelve-form").height();
            var mytitle = $(".twelve-title").height();
            var mystripes = $(".stripes").height();
            var mt = (mytwelvescreen-mytwelveform - mytitle - mystripes)/2;
            $(".twelve-form").css("bottom", mt);

            var my13screen = $(".thirteen").height();
            var my13contacts = $(".contactus").height();
            var my13title = $(".thirteen-title").height();
            var my13stripes = $(".stripes").height();
            var my13mt = (my13screen - my13contacts - my13title - my13stripes)/2;
            $(".contactus").css("bottom", my13mt);

            /*setInterval(function () {
                $.fn.fullpage.moveSlideRight();
            }, 4000);*/
        },
        afterLoad: function(anchorLink, index){
            if (index == 2) {

            }

            if(index == 5){
                $(".six-container-title").removeClass("six-container-title-up");
            }
            if(index == 9){
                $(".ten-container-title").removeClass("ten-container-title-up");
            }
        },
        onLeave: function(index, nextIndex, direction){
            if (index == 5 && direction == "down"){
                $(".six-container-title").addClass("position-fixed");
            }

            if (index == 8 && direction == "down"){
                $(".six-container-title").removeClass("position-fixed");
                $(".six-container-title").addClass("six-container-title-up");
            }

            if (index == 9 && direction == "up"){
                $(".six-container-title").addClass("position-fixed");
                $(".six-container-title").removeClass("six-container-title-up");
            }

            if(index == 6 && direction =='up'){
                $(".six-container-title").removeClass("position-fixed");
                //$(".six-container-title").removeClass("six-container-title-up")
            }

            if (index == 9 && direction == "down"){
                $(".ten-container-title").addClass("ten-container-title-fixed");
            }

            if (index == 11 && direction == "down"){
                $(".ten-container-title").removeClass("ten-container-title-fixed");
                $(".ten-container-title").addClass("ten-container-title-up");
            }

            if (index == 12 && direction == "up"){
                $(".ten-container-title").addClass("ten-container-title-fixed");
                $(".ten-container-title").removeClass("ten-container-title-up");
            }

            if(index == 10 && direction =='up'){
                $(".ten-container-title").removeClass("ten-container-title-fixed");
                //$(".six-container-title").removeClass("six-container-title-up")
            }
        }
    });
});
