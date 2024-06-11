const tagIMenu = document.querySelector('#menu')
const InputSearch = document.querySelector('#search')
const tagDivs = document.querySelectorAll('div')


tagIMenu.addEventListener('click',e=>{
    InputSearch.classList.toggle('activesearch')
    e.target.classList.toggle('activemenu')
})


InputSearch.addEventListener('input', e => {
    const tagDivs = document.querySelectorAll('div')

    tagDivs.forEach(ele => {

        if(!ele.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
            ele.closest('aside').classList.add('none')
        }else{
            ele.closest('aside').classList.remove('none')
        }
        
    })

})



