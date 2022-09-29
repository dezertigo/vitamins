function login() {
    const recoverBtn = document.querySelector('.form__pass');
    const hideLogin = document.querySelector('.sign-in__inner');
    const showRecover = document.querySelector('.sign-in__recovery-inner');
    recoverBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideLogin.classList.add('hide');
        showRecover.classList.add('active');
    })
}


export default login();