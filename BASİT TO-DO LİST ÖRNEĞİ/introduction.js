const tagInput = document.querySelector('input')
const addButton = document.querySelector('button')
const tagUL = document.querySelector('ul')


addButton.addEventListener('click',e=>{
    const creatLi = document.createElement('li')
    const creatLabel = document.createElement('label')

    const createCheckbox = document.createElement('input')
    createCheckbox.type = 'checkbox'

    const creatText = document.createElement('div')
    creatText.textContent = tagInput.value

    const creatRemoveButton = document.createElement('img')
    creatRemoveButton.src = 'https://www.svgrepo.com/show/510922/close-sm.svg'
    creatRemoveButton.width = 20
    creatRemoveButton.height = 20

    creatRemoveButton.addEventListener('click',e=>{
        e.target.closest('li').remove()
    })

    createCheckbox.addEventListener('click',e=>{
        if(e.target.checked){
            creatText.classList.add('active')
        }else{
            creatText.classList.remove('active')
        }
    })

    creatLi.append(creatLabel)
    creatLabel.append(createCheckbox)
    creatLabel.append(creatText)
    creatLabel.append(creatRemoveButton)
    tagUL.append(creatLi)

    tagInput.value = ''
})