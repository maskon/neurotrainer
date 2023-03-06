$(function () {

    /* Nav Toggle */
    /* 01 */

    let nav = $("#nav");
    let navToggle = $("#navToggle");

     $("#burger, #nav__link").on("click", function(event) {
        event.preventDefault();

        $("#nav, #burger").toggleClass("active");
        $("body").toggleClass("no-scroll");
    });


    /* 02 */

    $("#burger-2, #nav__link-2").on("click", function(event) {
        event.preventDefault();

        $("#nav-2, #burger-2").toggleClass("active");
        $("body").toggleClass("no-scroll");
    });


    /* 03 */

    $("#burger-filter, #burger-filter-sorting, #img-close").on("click", function(event) {
        event.preventDefault();

        $("#burger-filter-nav").toggleClass("active");
        $("body").toggleClass("no-scroll");
    });


    /* 04 */

    $("#form__btn-search-mobil, #img-close2, #filters-btn-search-mobil").on("click", function(event) {
        event.preventDefault();

        $("#search-mobil").toggleClass("active");
        $("body").toggleClass("no-scroll");
    });



    /* Filter
    =====================*/
    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');

                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011вЂ“2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);


   /* Jquery UI Slider */

    jQuery("#slider").slider({
    min: 0,
    max: 10000,
    animate: 500,
    values: [1000,8000],
    range: true,
    stop: function(event, ui) {
        jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
        jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    },
    slide: function(event, ui){
        jQuery("input#minCost").val(jQuery("#slider").slider("values",0));
        jQuery("input#maxCost").val(jQuery("#slider").slider("values",1));
    }
});

    jQuery("input#minCost").change(function(){
    var value1=jQuery("input#minCost").val();
    var value2=jQuery("input#maxCost").val();
    if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        jQuery("input#minCost").val(value1);
    }
    jQuery("#slider").slider("values",0,value1);
});
jQuery("input#maxCost").change(function(){
    var value1=jQuery("input#minCost").val();
    var value2=jQuery("input#maxCost").val();
    if (value2 > 10000) { value2 = 10000; jQuery("input#maxCost").val(10000)}
    if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        jQuery("input#maxCost").val(value2);
    }
    jQuery("#slider").slider("values",1,value2);
});


/* Modal на HTML CSS и jQuery */


    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);
    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');


        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modal").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });


    /* Reviews https://kenwheeler.github.io/slick/*

/* Slider */
  $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});

 $('.slider-nav').slick({
  slidesToShow: 3.9,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
});


/* Табы на JQuery */

$('.js-tab-trigger').click(function() {
   var id = $(this).attr('data-tab'),
       content = $('.js-tab-content[data-tab="'+ id +'"]');

   $('.js-tab-trigger.active').removeClass('active'); // 1
   $(this).addClass('active'); // 2

   $('.js-tab-content.active').removeClass('active'); // 3
   content.addClass('active'); // 4
});
});


/* Корзина товаров */
$(function () {
    $('.smart-basket__wrapper').smbasket({
        productElement: 'card-basket, .card-basket__body',
        buttonAddToBasket: 'card-form__btn',
        productPrice: 'product__price-number',
        productSize: 'product__size-element',

        productQuantityWrapper: 'product__quantity',
        smartBasketMinArea: 'alert-button',
        countryCode: '+7',
        smartBasketCurrency: '₽',
        smartBasketMinIconPath: 'img/header/basket.svg',

        agreement: {
            isRequired: true,
            isChecked: true,
            isLink: 'https://artstranger.ru/privacy.html',
            },
            nameIsRequired: false,
        });
    });















