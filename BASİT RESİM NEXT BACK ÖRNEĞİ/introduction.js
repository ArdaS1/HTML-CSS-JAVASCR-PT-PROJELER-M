const nextButton = document.getElementById('next')
const backButton = document.getElementById('back')
const main = document.querySelector('main')

let total = 0

nextButton.addEventListener('click',e=>{

    if(main.style.cssText == `transform: translateX(-${(main.childElementCount - 1) * 600}px);`){

    }

    else{
        main.style.transform = `translateX(${total += -600}px)`
    }
    
})

backButton.addEventListener('click',e=>{
    
    if(main.style.transform == ``){

    } 

    else if(main.style.transform == `translateX(0px)`){
        
    }

    else{
        main.style.transform = `translateX(${total += 600}px)`
    }

})

