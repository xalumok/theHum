/**
 * Created by user on 29.08.2017.
 */

$(".home-slider").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    margin: 30,
    smartSpeed: 1000,
    loop: true,
    autoplay: true,
    dots: false,
    touchDrag: false,
    mouseDrag: false
});


$(window).on("load", function () {
    $(".css-loader").fadeOut();
    $(".loader").delay(400).fadeOut();
});


function setAnimation(elem, animationType){
    $(elem).css("opacity", "0").addClass("animated");
    $(elem).waypoint({
        handler: function(dir) {
            if (dir === 'down') {
                $(this.element).removeClass('fadeOut').addClass(animationType).css('opacity', '1');
            } else {
                $(this.element).removeClass(animationType).addClass('fadeOut').css('opacity', '1');
            }
        },
        offset: '100%'
    });
}

function initAnimations(){
    setAnimation(".adv-icon", "zoomIn");
    setAnimation(".adv-header", "zoomIn");
    setAnimation(".section-header", "fadeLeft");
    setAnimation(".feature-item", "fadeIn");
    setAnimation(".about-us-devices", "slideInLeft");
}

initAnimations();