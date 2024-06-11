const tagH2 = document.querySelector('h2')
const mainButton = document.querySelector('main')
const tagHeader = document.querySelector('header')


const text = 'Selamlar Ben Arda Arslan Front-End yazılımcısıyım.'
let index = 1

function writeText(){
    tagH2.textContent = text.slice(0,index)
    index++

    if(index > text.length){
        index = 1
    }

    setTimeout(writeText,50)
}
writeText()


mainButton.addEventListener('click',e=>{
    e.target.classList.toggle('mainActive')
    tagHeader.classList.toggle('headerActive')
    
    if(e.target.classList == 'mainActive'){
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }
    else{
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }

    localStorage.setItem('bodyBackgroundColor',document.body.style.backgroundColor)
    localStorage.setItem('eTargetClassList',e.target.classList)
    localStorage.setItem('tagHeaderClassList',tagHeader.classList)
    localStorage.setItem('bodyColor',document.body.style.color)
})

if(localStorage.getItem('bodyBackgroundColor')){
    document.body.style.backgroundColor = localStorage.getItem('bodyBackgroundColor')
}

if(localStorage.getItem('eTargetClassList')){
    mainButton.classList.add(localStorage.getItem('eTargetClassList'))
}

if(localStorage.getItem('tagHeaderClassList')){
    tagHeader.classList.add(localStorage.getItem('tagHeaderClassList'))
}

if(localStorage.getItem('bodyColor')){
    document.body.style.color = (localStorage.getItem('bodyColor'))
}



