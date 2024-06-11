const tagTextarea = document.querySelector('textarea')
const tagMain = document.querySelector('main')
const tagResetButton = document.querySelector('button')

let newDivArray = []

tagTextarea.addEventListener('keydown',e=>{
    if(e.code == 'Enter'){
        for(let i = 0; i < e.target.value.split(',').length;i++){
            if(!e.target.value == ''){
                const newDiv = document.createElement('div')
                newDiv.textContent = e.target.value.split(',')[i]
                tagMain.append(newDiv)
                newDivArray.push(newDiv)
            }
            
        }

        e.target.value = ''
        e.preventDefault()
        
        try{
            let randomSelect = Math.floor(Math.random() * newDivArray.length)
            newDivArray[randomSelect].style.backgroundColor = 'lime'
        }
        catch(err){
            alert('Textarea\'yı boş bıraktığınız için seçme işlemi yapılamıyor.')
        }

        if(tagMain.childElementCount > 1){
            e.target.disabled = true
            e.target.placeholder = 'İşlem Başarılı ✓'
            e.target.style.backgroundColor = '#88a47d'
        }

    }
})

tagResetButton.addEventListener('click',e=>{
    tagTextarea.disabled = false
    tagTextarea.placeholder = 'Seçenekleri buraya giriniz...'
    tagTextarea.style.backgroundColor = 'white'
    newDivArray = []
    ;[...tagMain.children].forEach((val,ind) =>{
        if(ind > 0){
            val.remove()
        }
    })
    console.log(newDivArray)
})


