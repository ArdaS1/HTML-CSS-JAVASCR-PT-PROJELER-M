const button = document.querySelector('button')
const aside = document.querySelector('aside')
const tagDivs = document.querySelectorAll('div')
const finishMain = document.getElementById('finish')


let translateTotal = 0
button.addEventListener('click',e=>{
    if(aside.style.transform != `translateX(${((aside.childElementCount - 1) * -450)}px)` && aside.classList.value == 'start'){
        aside.style.transform = `translateX(${translateTotal -= 450}px)`
    }

    
})


let isTrueQues = 0
tagDivs.forEach(ele =>{
    ele.addEventListener('click',e=>{

        e.target.closest('aside').classList.add('start')

        if(!e.target.classList.value.includes('trueques')){
            e.target.style.backgroundColor = 'tomato'
            let a = e.target.closest('footer').children
            ;[...a].forEach(i => {
                if(i.classList.value.includes('trueques')){
                    i.style.backgroundColor = 'limegreen'
                }
            })
        }else if(e.target.classList.value.includes('trueques')){
            e.target.style.backgroundColor = 'limegreen'
            isTrueQues += 1
        }
        
        finishMain.innerHTML = `<h2>Basit Quiz</h2>
        <nav></nav>
        <span>${isTrueQues} tane doğru cevabın var, ${aside.childElementCount - 1} soru üzerinden </span>
        <img id="restart" src="https://www.svgrepo.com/show/526141/refresh-circle.svg" width="70px" height="70px">`

        const refreshIMG = document.getElementById('restart')
        refreshIMG.addEventListener('click',e=>{
            aside.style.transform = 'translateX(0px)'
            aside.classList.remove('start')
            translateTotal = 0
            isTrueQues = 0
            tagDivs.forEach(elebg=>{
                elebg.style.backgroundColor = 'white'
            })
            
        }) 
    })
})

