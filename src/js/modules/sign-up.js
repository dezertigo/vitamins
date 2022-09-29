function registr() {
    const signUpBtns = document.querySelectorAll('.sign-up__btn');
    const socialLoginBtns = document.querySelectorAll('.social-login__btn');
    const hideTicket = document.querySelector('.sign-up__inner');
    const showTicket = document.querySelector('.sign-up__wholesale-inner');
    const formFile = document.querySelector('.sign-up__form-label');
    const regularBtn = document.querySelector('.sign-up__btn--regular');
    signUpBtns.forEach(item => (item.addEventListener('click', () => {
        signUpBtns.forEach(el => el.classList.remove('active'));
        item.classList.toggle('active');
        formFile.classList.add('active');
    })));
    regularBtn.addEventListener('click', () => {
        formFile.classList.remove('active');
    });
    socialLoginBtns.forEach(item => (item.addEventListener('click', ()=> {
        hideTicket.classList.add('hide');
        showTicket.classList.add('active');
    })))

}

export default registr();