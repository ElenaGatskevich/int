/*Скрол для шапки на пк*/
const header =document.querySelectorAll(".header");
window.addEventListener('scroll', function () {

       if (window.scrollY > 198) {
           header.forEach(element=>{
               element.classList.add("header_fixed");
           });

        }
       if(window.scrollY < 1) {
           header.forEach(element=>{
               element.classList.remove("header_fixed");
           });
        }
    });
/*Скрол для шапки на мобильном*/
const headerMobile =document.querySelectorAll(".header__mobile");
window.addEventListener('scroll', function () {

    if (window.scrollY > 104) {
        headerMobile.forEach(element => {
            element.classList.add("header_fixed");
        });
    }
        if (window.scrollY <1) {
        headerMobile.forEach(element=>{
            element.classList.remove("header_fixed");
        });
    }
});
/*input поиска на всю ширину на пк*/
const search=document.querySelectorAll(".search__input");
search.forEach(item=>{
    item.addEventListener('focusin',function () {
        item.closest('.search').classList.add('active');

    });
    item.addEventListener('focusout',function () {
        item.value='';
        item.closest('.search').classList.remove('active');
    });
});

const searchMobileOpen=document.querySelectorAll(".search__button_mobile");
searchMobileOpen.forEach(item=>{
    item.addEventListener('click',function () {
        item.closest('.search').classList.add('active');
        item.closest('.header__middle').classList.add('active');

    });
});
const searchMobileClose=document.querySelectorAll(".search__button_close");
searchMobileClose.forEach(item=>{
    item.addEventListener('click',function () {
        item.closest('.search').classList.remove('active');
        item.closest('.header__middle').classList.remove('active');

    });
});

const burgerOpen=document.querySelectorAll(".burger__open");
burgerOpen.forEach(item=>{
    item.addEventListener('click',function () {
        item.closest('.header__middle').classList.add('open');
        item.closest('.header__mobile').classList.add('open');
    });
});

const menuOpen=document.querySelectorAll(".multi-level__item_parent .multi-level__link");
menuOpen.forEach(item=>{
    item.addEventListener('click',function () {

        item.closest('.multi-level__item_parent').classList.add('open');


    });
});
const menuClose=document.querySelectorAll(".multi-level__back");
menuClose.forEach(item=>{
    item.addEventListener('click',function () {

        item.closest('.open').classList.remove('open');


    });
});
function close(item) {
    item.closest('.header__middle').classList.remove('open');
    item.closest('.header__middle').classList.remove('close');
    item.closest('.header__mobile').classList.remove('open');
}

const burgerClose=document.querySelectorAll(".burger__close");
burgerClose.forEach(item=>{
    item.addEventListener('click',function () {


        item.closest('.header__middle').classList.add('close');
      //  setTimeout(item.closest('.header__middle').classList.remove('close'),3000);
        setTimeout(close,300,item);
    });
});

const parent=document.querySelectorAll(".main-menu__item_parent");
parent.forEach(item=>{
    item.addEventListener('mouseover', function() {

      item.classList.add('open');
    });
    item.addEventListener('mouseout', function() {
        item.classList.remove('open');
    });
});

const child=document.querySelectorAll(".child-menu__item_parent");
child.forEach(item=>{
    item.addEventListener('mouseover', function() {

        item.classList.add('open');
    });
    item.addEventListener('mouseout', function() {
        item.classList.remove('open');
    });
});

const reviewText=document.querySelectorAll(".reviews__text");
reviewText.forEach(item=>{
    if(item.textContent.length > 230){
        item.classList.add('more');
    }
});
const bigText=document.querySelectorAll(".text__wrap .text");
bigText.forEach(item=>{
    if(item.textContent.length > 280){
        item.closest('.text__wrap').classList.add('text__wrap_more');
    }
});
const bigTextOpen=document.querySelectorAll(".text__more");
bigTextOpen.forEach(item=>{
    item.addEventListener('click', function() {

        item.closest('.text__wrap').classList.remove('text__wrap_more');
    });
});
const reviewMore=document.querySelectorAll(".reviews__more");

reviewMore.forEach(item=>{
    item.addEventListener('click',function () {

        item.closest('.reviews__slide').classList.add('reviews__slide_more');
    });
});

const accordion=document.querySelectorAll(".accordion__name");
accordion.forEach(item=>{
    item.addEventListener('click',function () {
        item.closest('.accordion__item').classList.toggle('open');
    });
});
const parametrs=document.querySelectorAll(".parametrs__item ");

parametrs.forEach(item=>{
    item.addEventListener('click',function () {
        parametrs.forEach(e=>{
            e.classList.remove('parametrs__item_active')
        });
        item.classList.add('parametrs__item_active');
    });
});



const parametrsValue=document.querySelectorAll(".parametrs__value");

parametrsValue.forEach(item=>{
    item.addEventListener('click',function () {
        const par=item.closest('.parametrs__column');
            par.querySelectorAll('.parametrs__current').forEach(e =>{
                e.textContent=item.innerHTML;
            })
    });
});

const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParrent = document.querySelector('.tabheader__items');


function hideTabContent(){
    tabsContent.forEach(item => {

        item.classList.add('hide');
        item.classList.remove('show');
    });


    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
    });
}


function showTabContent(i = 0){

    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
}




if(tabsParrent) {
    tabsParrent.addEventListener('click', (event) => {
        const target = event.target;


        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

    if (document.documentElement.clientWidth < 769) {
        const cost=document.querySelectorAll(".cost__name");
        cost.forEach(item=>{
            item.addEventListener('click',function () {
                item.closest('.tabcontent__row').classList.toggle('open');
            });
        });
    }



const realInput = document.querySelectorAll('input[type="file"]');
realInput.forEach(item=>{
    item.addEventListener('change',function () {
        const fileName = item.value.split('\\').pop();

        if(fileName) {
            item.closest('.form__file').classList.add('form__file_active');
        }
        else{
            item.closest('.form__file').classList.remove('form__file_active');
        }
        const span=item.closest('.form__file').querySelectorAll('.file__text');

        span.forEach(e=>{
            e.textContent=fileName || 'Ваш макет';
        });

    });
});


document.addEventListener("DOMContentLoaded", (function () {

        Fancybox.bind("[data-fancybox]");

        new WOW().init();

        new Swiper(".clients__slider", {

            loop: true,

            slidesPerView: "auto",
                navigation: {
                nextEl: '.swiper__next',
                prevEl: '.swiper__prev',
            },
            breakpoints: {
                0:{
                    pagination: {
                        el: '.swiper__pagination',
                        clickable: true,
                    },

                    navigation:false
                },
                768:{
                    pagination: false
                }
            }


        });
        new Swiper(".our__slider", {


            spaceBetween: 24,
            slidesPerView: "auto",

           slidesPerGroup:3,

            grid: {
                rows: 2,
                fill: "row",
            },
            loop: false,
            navigation: {
                nextEl: '.swiper__next',
                prevEl: '.swiper__prev',
            },
            breakpoints: {
                0:{
                    slidesPerView: "auto",
                    slidesPerGroup:1,
                    spaceBetween: 12,
                    grid: {
                        rows: 1,
                        fill: "column",
                    },
                },

                980:{

                    grid: {
                        rows: 2,
                        fill: "row",
                    },
                    slidesPerGroup:3,

                }
            }




        });
        new Swiper(".examples__slider", {

            loop: true,
            spaceBetween: 24,
            slidesPerView: "auto",
            navigation: {
                nextEl: '.swiper__next',
                prevEl: '.swiper__prev',
            },
            breakpoints: {
                0:{
                    slidesPerView: 1,
                },
                768:{
                    slidesPerView: "auto",
                }
            }


        });
        new Swiper(".reviews__slider", {

            loop: true,
            spaceBetween:12,
            slidesPerView: 3,

            navigation: {
                nextEl: '.swiper__next',
                prevEl: '.swiper__prev',
            },
            pagination: {
                el: '.swiper__pagination',
                clickable: true,
            },
            breakpoints: {
                0:{
                    slidesPerView: 1,
                },
                480:{
                    slidesPerView: 2,
                },
                1100:{
                    slidesPerView: 3,
                }
            }



        });
        new Swiper(".documents__slider", {

            loop: true,
            spaceBetween:114,
            slidesPerView: 4,
            navigation: {
                nextEl: '.swiper__next',
                prevEl: '.swiper__prev',
            },
            breakpoints: {
                0:{
                    slidesPerView: 1,
                },
                480:{
                    spaceBetween:57,
                    slidesPerView: 2,
                },
                768:{
                    spaceBetween:57,
                    slidesPerView: 3,
                },
                980:{
                    slidesPerView: 3,

                },
                1200:{
                    slidesPerView: 4,
                    spaceBetween:114,
                }
            }


        });
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 12,
            slidesPerView: "auto",
            freeMode: true,
            watchSlidesProgress: true,
        });
        var swiper2 = new Swiper(".mySwiper2", {
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper__next',
                prevEl: '.swiper__prev',
            },
            thumbs: {
                swiper: swiper,
            },
        });
        new Swiper(".product__slider", {

            loop: true,
            spaceBetween:24,
            slidesPerView: 4,
            navigation: {
                nextEl: '.swiper__next',
                prevEl: '.swiper__prev',
            },
            breakpoints: {
                0:{
                    slidesPerView: 2,
                    spaceBetween:12,
                },

                768:{
                    spaceBetween:24,
                    slidesPerView: 3,
                },
                980:{
                    slidesPerView: 4,

                },

            }


        });

        new Swiper(".similar__slider", {

            loop: true,
            spaceBetween:24,
            slidesPerView: 4,
            navigation: {
                nextEl: '.swiper__next',
                prevEl: '.swiper__prev',
            },
            breakpoints: {
                0:{
                    slidesPerView: 2,
                    spaceBetween:12,
                },

                768:{
                    spaceBetween:24,
                    slidesPerView: 3,
                },
                980:{
                    slidesPerView: 4,

                },

            }


        });



    }

));
