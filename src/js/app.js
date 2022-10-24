import Swiper, {Navigation} from 'swiper';

if (document.querySelector('body.home-page')) {
    new Swiper('.products__slider', {
        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 35,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            450: {
                slidesPerView: 1.3,
                spaceBetween: 10,
            },
            300: {
                slidesPerView: 1.0000002,
                spaceBetween: 10,
            }
        }
    })
        
    
    new Swiper('.reviews__slider', {
        breakpoints: {
            1400: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
            1200: {
                slidesPerView: 3,
            },
            700: {
                slidesPerView:  2,
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 1.000001,
                spaceBetween: 10,
            }
        }
    });
}

if (document.querySelector('.shop-page')) {
    new Swiper('.slider', {
        modules: [Navigation],
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 50,
        initialSlide: 1,
        loop: true,
        navigation: {
            nextEl: '.slider__button-next',
            prevEl: '.slider__button-prev',
        },
    })
    // document.querySelector('.slider__button-next').click();

    const shopList = document.querySelectorAll('.shop__item');
    shopList.forEach(item => (item.addEventListener('click', () => {
        shopList.forEach(el => el.classList.remove('active'));
        if (!item.classList.contains('active')) {
            item.classList.add('active');
        }
    })))

    new Swiper('.reviews__slider', {
        breakpoints: {
            1400: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
            1200: {
                slidesPerView: 3,
            },
            700: {
                slidesPerView:  2,
                spaceBetween: 20,
            },
            300: {
                slidesPerView: 1.000001,
                spaceBetween: 10,
            }
        }
    });
    
}

// import login from './modules/sign-in.js';
if (document.querySelector('.sign-in-page')) {    
    const recoverBtn = document.querySelector('.form__pass');
    const hideLogin = document.querySelector('.sign-in__inner');
    const showRecover = document.querySelector('.sign-in__recovery-inner');
    recoverBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideLogin.classList.add('hide');
        showRecover.classList.add('active');
    })

}

// import registr from './modules/sign-up.js';
if (document.querySelector('.sign-up-page')) {
    const signUpBtns = document.querySelectorAll('.sign-up__btn');
    const socialLoginBtns = document.querySelectorAll('.social-login__btn');
    const hideTicket = document.querySelector('.sign-up__inner');
    const showTicket = document.querySelector('.sign-in__recovery-inner');
    const formFile = document.querySelector('.sign-up__form-label');
    const regularBtn = document.querySelector('.sign-up__btn--regular');
    const permissionText = document.querySelector('.sign-up__form-permission');
    signUpBtns.forEach(item => (item.addEventListener('click', () => {
        signUpBtns.forEach(el => el.classList.remove('active'));
        item.classList.toggle('active');
        formFile.classList.add('active');
        permissionText.classList.add('active');
    })));
    regularBtn.addEventListener('click', () => {
        formFile.classList.remove('active');
        permissionText.classList.remove('active');
    });
   
    socialLoginBtns.forEach(item => (item.addEventListener('click', ()=> {
        hideTicket.classList.add('hide');
        showTicket.classList.add('active');
    })));
    
}

if (document.querySelector('body.sign-in-page')) {
    const backBtn= document.querySelector('.acc-header__title');
    backBtn.addEventListener('click', () => {
        location.href="index.html";
    })
}

if (document.querySelector('body.profile-page')) {
    const tabsBtn = document.querySelectorAll('.tabs__link');
    const tabsItem = document.querySelectorAll('.tabs__item');
    tabsBtn.forEach((item) => {
        item.addEventListener('click', ()=>{
            let tabId = item.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);
            if (!item.classList.contains('active')) {
                tabsBtn.forEach(item => {
                    item.classList.remove('active');
                })
                tabsItem.forEach(item => {
                    item.classList.remove('active');
                })
                item.classList.add('active');
                currentTab.classList.add('active');
            }
        })
    })

    

    const accordion = document.querySelector(".order__inner");
    if (accordion) {
        const body =  document.querySelector('body');
        body.addEventListener("click", toggleSpoiler);
        function toggleSpoiler(e) {
           if (e.target.closest(".order__top")) {
              e.target.closest(".order__inner").classList.toggle("opened");
              let accordionWrapper = e.target.closest(".order__top").nextElementSibling;
              if (!e.target.closest(".order__inner").classList.contains("opened")) {
                accordionWrapper.style.height = null;
              } else {
                accordionWrapper.style.height = accordionWrapper.scrollHeight + "px";
              }
           }
        }
    }
    const accType = document.querySelectorAll('.account__type');
    const accPerm = document.querySelector('.account__label--wholesale');
    document.addEventListener('click', (e) => {
            if (e.target.closest('.account__type')) {
                if (!accType[0].classList.contains('active')) {
                    accType[0].classList.add('active')
                    accType[1].classList.remove('active');
                    accPerm.classList.remove('active');
                }  else {
                    accType[0].classList.remove('active')
                    accType[1].classList.add('active');
                    accPerm.classList.add('active');
                }
                
            }
            
        })
}

if (document.querySelector('body.quiz-page')) {

    const quizSteps = document.querySelectorAll('.quiz__step');

    window.addEventListener('click', (e) => {
        if (e.target.closest('.quiz__step--1 .quiz__btn-next')) {
            quizSteps[0].classList.remove('active');
            quizSteps[1].classList.add('active');
        } else if (e.target.closest('.quiz__step--2 .quiz__link')) {
            quizSteps[1].classList.remove('active');
            quizSteps[2].classList.add('active');
        } else if (e.target.closest('.quiz__step--3 .quiz__link')) {
            quizSteps[2].classList.remove('active');
            quizSteps[3].classList.add('active');
        } else if (e.target.closest('.quiz__step--4 .quiz__link')) {
            quizSteps[3].classList.remove('active');
            quizSteps[4].classList.add('active');
        } else if (e.target.closest('.quiz__step--5 .quiz__link')) {
            quizSteps[4].classList.remove('active');
            quizSteps[5].classList.add('active');
        } else if (e.target.closest('.quiz__step--6 .quiz__link')) {
            quizSteps[5].classList.remove('active');
            quizSteps[6].classList.add('active');
        } else if (e.target.closest('.quiz__step--7 .quiz__link')) {
            quizSteps[6].classList.remove('active');
            quizSteps[7].classList.add('active');
        } else if (e.target.closest('.quiz__step--8 .quiz__link')) {
            quizSteps[7].classList.remove('active');
            quizSteps[8].classList.add('active');
        } else if (e.target.closest('.quiz__step--9 .quiz__btn-next')) {
            location.href= "pack.html";
        }
    });
}

if (document.querySelector('body.checkout-page')) {

    const accord = document.querySelector(".checkout__cart");
    if (accord) {
        const body =  document.querySelector('body');
        body.addEventListener("click", toggleSpoiler);
        function toggleSpoiler(e) {
           if (e.target.closest(".checkout__preview")) {
              e.target.closest(".checkout__cart").classList.toggle("opened");
              let accordionWrapper = e.target.closest(".checkout__preview").nextElementSibling;
              if (!e.target.closest(".checkout__cart").classList.contains("opened")) {
                accordionWrapper.style.height = null;
              } else {
                accordionWrapper.style.height = accordionWrapper.scrollHeight + "px";
              }
           }
        }
    }

}

