const spoiler = document.getElementsByClassName('info__spoiler')
const plus = document.getElementsByClassName('info__plus')
const block = document.getElementsByClassName('info__spolier-block')

for (let i = 0; i < spoiler.length; i++) {
    spoiler[i].addEventListener('click', () =>{
        if(block[i].className === 'info__spolier-block active'){
            spoiler[i].classList.remove('active')
            plus[i].classList.remove('active')
            block[i].classList.remove('active')
        }else{
            spoiler[i].classList.add('active')
            plus[i].classList.add('active')
            block[i].classList.add('active')
        }
    })
}
