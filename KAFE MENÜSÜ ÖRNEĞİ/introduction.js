const tagUl = document.querySelector('ul')
const tagLi = document.querySelectorAll('li')
const tagButtons = document.querySelectorAll('.menubutton')
const breakFast = document.querySelectorAll('.breakfast')
const fastFood = document.querySelectorAll('.fastfood')
const drinks = document.querySelectorAll('.drink')

const addButton = document.getElementById('add')
const saveButton = document.getElementById('buttonsave')
const popUpFooterOne = document.getElementById('popupone')
const foodImage = document.getElementById('foodimage')
const foodName = document.getElementById('foodname')
const foodPrice = document.getElementById('foodprice')
const foodContent = document.getElementById('foodcontent')
const foodSelectOne = document.getElementById('selectone')

const removeButton = document.getElementById('remove')
const deleteButton = document.getElementById('buttondelete')
const popUpFooterTwo = document.getElementById('popuptwo')
const foodSelectTwo = document.getElementById('selecttwo')



function removeClass(tag){
    return tag.forEach(item => item.classList.remove('displaynone'))
}

function addClass(tag){
    return tag.forEach(item => item.classList.add('displaynone'))
}

tagButtons.forEach(btn => {
    btn.addEventListener('click',e =>{
        if(e.target.id == 'buttonall'){
            removeClass(breakFast)
            removeClass(fastFood)
            removeClass(drinks)
    
        }else if(e.target.id == 'buttonbreakfast'){
            removeClass(breakFast)
            addClass(fastFood)
            addClass(drinks)
            
        }else if(e.target.id == 'buttonfastfoot'){
            removeClass(fastFood)
            addClass(breakFast)
            addClass(drinks)

        }else if(e.target.id == 'buttondrink'){
            removeClass(drinks)
            addClass(breakFast)
            addClass(fastFood)
        }
    })
})


addButton.addEventListener('click',e=>{
    popUpFooterOne.classList.toggle('displaynone')
})
popUpFooterOne.addEventListener('mousedown',e=>{
    if(e.target.id == 'popupone'){
        e.target.classList.toggle('displaynone')
    }
})

saveButton.addEventListener('click',e=>{
    const newFood = document.createElement('li')
    newFood.classList.add(foodSelectOne.value)
    newFood.setAttribute('data-foodid',foodName.value)
    newFood.setAttribute('data-foodvalue',foodName.value)
    newFood.innerHTML = `<img src="${foodImage.files[0].name}" style="width: 150px; height: 100px;">
    <div>${foodName.value} <span>₺${foodPrice.value}</span> <hr> <p>${foodContent.value}</p></div>`

    tagUl.append(newFood)
    if(e.isTrusted == true){
        popUpFooterOne.classList.toggle('displaynone')
        foodImage.value = ''
        foodName.value = ''
        foodPrice.value = ''
        foodContent.value = ''
        foodSelectOne.value = ''
    }
})

const foodList = []
const foodValueList = []
const foodListAppend = tagLi.forEach(ele => foodList.push(ele.dataset.foodid))
const foodValueListAppend = tagLi.forEach(ele => foodValueList.push(ele.dataset.foodvalue))

removeButton.addEventListener('click',e=>{
    popUpFooterTwo.classList.toggle('displaynone')
    
    if(foodSelectTwo.childElementCount < 1){
        for(let i=1; i < tagUl.childElementCount;i++){
            const newOption = document.createElement('option')
            newOption.textContent = foodList[i]
            newOption.value = foodValueList[i]
            newOption.classList.add('newoption')
            foodSelectTwo.append(newOption)
        }
    }
})

popUpFooterTwo.addEventListener('mousedown',e=>{
    if(e.target.id == 'popuptwo'){
        e.target.classList.toggle('displaynone')
    }
})


foodSelectTwo.addEventListener('change',e=>{
    if(foodValueList.includes(e.target.value)){
        const deneme = e.target.value
        deleteButton.addEventListener('click',e=>{
            tagLi.forEach(z => {
                if( z.dataset.foodvalue == deneme){
                    popUpFooterTwo.classList.add('displaynone')
                    z.remove()
                    const newOption = document.querySelectorAll('.newoption')
                    newOption.forEach(p => {
                        if(deneme == p.value){
                            p.remove()
                        }
                    })
                    
                }
            })
        })
    }
})

