const tagInputs = document.querySelectorAll('input')

tagInputs.forEach(ele =>{

    ele.addEventListener('input',e=>{
        if(e.target.value.length == 1 && tagInputs[tagInputs.length - 1].value == 0){
            e.target.nextElementSibling.focus() 
        }  // bu if input'un dolu olduğu zaman bir sonraki input'a focus olma kısmıdır.

        if(e.target.value.length == 1){
            e.target.classList.add('active')
        }else{  // bu if else input'un dolu olduğu zaman aldığı stil işlemleri içindir.
            e.target.classList.remove('active')
        }
    })

    ele.addEventListener('keydown',e=>{
        if(e.key == 'Backspace' && e.target.value == '' && tagInputs[0].value != 0){
            e.target.previousElementSibling.focus()
        }  // buradaki işlem input'un value'su silindiği zaman bir önceki input'a focus olma kısmıdır.
    })

})



