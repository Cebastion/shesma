const burger = document.getElementById('burger__btn')
const navBar = document.getElementById('navBar')
const headerContainer = document.getElementById('header__container')

burger.addEventListener('click', () => {
    if(burger.className === 'burger__btn active'){
        burger.classList.remove('active')
        navBar.classList.remove('active')
        headerContainer.classList.remove('active')
        wallepper.classList.remove('active')
    }else{
        burger.classList.add('active')
        navBar.classList.add('active')
        headerContainer.classList.add('active')
    }
})