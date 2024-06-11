const menuButton = document.querySelector('#menu')
const tagAside = document.querySelector('aside')

menuButton.addEventListener('click',e=>{
    tagAside.classList.toggle('active')
    if(tagAside.classList.value == 'active'){
        e.target.className = 'fa fa-close'
    }else{
        e.target.className = 'fa fa-bars'
    }
})