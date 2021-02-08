// init base functions
$(window).on('load', function () {
    scrollDirection();
    initGettersAndSetters();
    changeTouchClickText();
});
$(window).on('hashchange', function (a) {
    initGettersAndSetters();
});

// init AOS
if (is.not.ie()) {
    AOS.init();
} else {
    $('*').removeAttr("data-aos");
}

// l
if ($('.l-nav').length) {
    var propsNav = {
        active: 'is-active',
        scrollInit: 0,
        scrollClassScrolled: 99,
        scrollClassMiddle: 600,
        body: $('body'),
        nav: $('.l-nav'),
        hamburguer: $('.l-nav .c-hamburguer'),
        contentMobile: $('.l-navMobileMenu')
    };

    function disableOverflow() {
        propsNav.body.addClass('u-overflowBlocked');
    }
    function enableOverflow() {
        propsNav.body.removeClass('u-overflowBlocked');
    }
    function closeAllSubMenus() {
        $('.c-subMenu').removeClass('is-active');
    }


    // RESPONSIVE MENU
    // - open
    propsNav.hamburguer.on('click', function() {
        $(this).addClass(propsNav.active);
        propsNav.contentMobile.addClass('is-active');
    });

    // close
    propsNav.contentMobile.children('.l-navMobileMenu__mask').on('click', function() {
        propsNav.hamburguer.removeClass(propsNav.active);
        propsNav.contentMobile.removeClass('is-active');
    });
    propsNav.contentMobile.children('.l-navMobileMenu__close').on('click', function() {
        propsNav.hamburguer.removeClass(propsNav.active);
        propsNav.contentMobile.removeClass('is-active');
    });

    // SCROLL CHANGES
    $(window).on('load', function(event) {
        var scrollBody = $(this).scrollTop();
        if (scrollBody > 1) {
            propsNav.nav.addClass('scrolled');
        } else {
            propsNav.nav.removeClass('scrolled');
        }
    });
    $(window).on('scroll', function() {
        var scrollBody = $(this).scrollTop();
        // scroll up to 99
        if (scrollBody > propsNav.scrollClassScrolled) {
            propsNav.nav.addClass('scrolled');
        } else {
            propsNav.nav.removeClass('scrolled');
        }
        // middle class
        if (scrollBody > propsNav.scrollClassMiddle) {
            propsNav.nav.addClass('hidden');
            propsNav.nav.addClass('scrolledMiddle');
        } else {
            propsNav.nav.removeClass('hidden');
            propsNav.nav.removeClass('scrolledMiddle');
        }
        // scroll up or down
        if (scrollBody < propsNav.scrollInit) {
            propsNav.nav.removeClass('hidden');
            propsNav.nav.addClass('scrolledUp');
            propsNav.nav.removeClass('scrolledDown');
        } else {
            propsNav.nav.removeClass('scrolledUp');
            propsNav.nav.addClass('scrolledDown');
        }
        // close menus on hidden nav
        if(propsNav.nav.hasClass('hidden')) {
            closeAllSubMenus();
        }
        // reference var
        propsNav.scrollInit = scrollBody;
    });

}
if ($('.l-headerSlide').length) {
    $( document ).ready(function() {
        var swiper_headerSlide = new Swiper ('.swiper_headerSlide', {
            speed: 400,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    if (index > 8) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    } else {
                        return '<span class="' + className + '"> 0' + (index + 1) + '</span>';
                    }
                },
            },
        });
    });
}

// s
if ($('.s-mainFeaturedProduct').length) {
    $(document).ready(function() {
        var swiperQuotes = new Swiper ('.s-mainFeaturedProduct__swiperQuotes', {
            speed: 400,
            spaceBetween: 0,
            pagination: {
                el: '.s-mainFeaturedProduct__swiperQuotes .swiper-pagination',
                clickable: true,
                render: 'bullets'
            },
        });
        var swiperProducts = new Swiper ('.s-mainFeaturedProduct__swiperProducts', {
            speed: 400,
            spaceBetween: 0,
            navigation: {
                nextEl: '.s-mainFeaturedProduct__swiperProducts .swiper-button-next',
                prevEl: '.s-mainFeaturedProduct__swiperProducts .swiper-button-prev',
            },
        });
    });
}
if ($('.s-collectionGrid').length) {
    $(document).ready(function() {
        var collectionGridSwiper = new Swiper ('.s-collectionGrid__swiper', {
            speed: 400,
            spaceBetween: 0,
            pagination: {
                el: '.s-collectionGrid__swiper .swiper-pagination',
                clickable: true,
                render: 'bullets'
            },
        });
    });
}
if ($('.s-productSale').length) {
    $(document).ready(function() {
        setTimeout(function(){ }, 3000);
        var swiper__productSale = new Swiper ('.swiper__productSale', {
            speed: 400,
            spaceBetween: 5,
            slidesPerView: 2,
            navigation: {
                nextEl: '.s-productSale .swiper-button-next',
                prevEl: '.s-productSale .swiper-button-prev',
            },
            breakpoints: {
                850: {
                    slidesPerView: 1,
                },
                980: {
                    slidesPerView: 2,
                },
                1140: {
                    slidesPerView: 1,
                }
            }
        });
    });
}