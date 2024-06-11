const addButton = document.querySelector('button')
const tagHeader = document.querySelector('header')


addButton.addEventListener('click',e=>{
    const newMain = document.createElement('main')
    const newTextarea = document.createElement('textarea')
    const newTagI = document.createElement('i')

    newTextarea.maxLength = 275
    newTagI.classList.add('fa')
    newTagI.classList.add('fa-trash')
    newTagI.classList.add('remove')

    newTagI.addEventListener('click',e=>{
        e.target.closest('main').remove()
    })

    tagHeader.append(newMain)

    newMain.append(newTextarea)
    newMain.append(newTagI)
})