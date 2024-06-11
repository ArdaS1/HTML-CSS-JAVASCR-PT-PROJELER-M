const tagHeader = document.querySelector('header')

window.addEventListener('scroll',e=>{
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop > 0){
        tagHeader.classList.add('active')
    }else{
        tagHeader.classList.remove('active')
    }
})