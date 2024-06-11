const controlInputs = document.querySelectorAll('.control')
const submitButton = document.querySelector('button')
const eyeIMG = document.getElementById('eye')

controlInputs.forEach(ele =>{
    ele.addEventListener('input',e=>{

        ele.setCustomValidity('')
        const regexNumber = /[0-9]+/.test(ele.value)
        const regexUpperCase = /[A-Z]+/.test(ele.value)
        if(!regexNumber){
            ele.setCustomValidity('En az bir SAYI olmak zorundadır')
        
        }else if(!regexUpperCase){
            ele.setCustomValidity('En az bir BÜYÜK HARF olmak zorundadır')

        }
        ele.reportValidity()


        if(ele.validity.valueMissing || ele.validity.tooShort || ele.validity.tooLong || ele.validity.typeMismatch || ele.validity.customError){
            ele.nextElementSibling.nextElementSibling.style.visibility = 'visible'
            ele.nextElementSibling.style.visibility = 'hidden'
    
        }else if(ele.validity.valueMissing == false && ele.validity.typeMismatch == false){
            ele.nextElementSibling.nextElementSibling.style.visibility = 'hidden'
            ele.nextElementSibling.style.visibility = 'visible'
        }

        if(ele.value == ''){
            ele.nextElementSibling.nextElementSibling.style.visibility = 'hidden'
            ele.nextElementSibling.style.visibility = 'hidden'
        }
    })
    
})


submitButton.addEventListener('click',e=>{
    
    if(document.forms.formOne.checkValidity()){
        console.log(`
            ID: ${document.forms.formOne.elements.user.value}
            PASSWORD: ${document.forms.formOne.elements.password.value}
            MAİL: ${document.forms.formOne.elements.mail.value}
            DATE: ${document.forms.formOne.elements.birthday.value}
            GENDER: ${document.forms.formOne.elements.gender.value}
            BLOG: ${document.forms.formOne.elements.blog.value}`
        )
        document.forms.formOne.reset()
        controlInputs.forEach(ele =>{
            ele.nextElementSibling.style.visibility = 'hidden'
            ele.nextElementSibling.nextElementSibling.style.visibility = 'hidden'
        })
    }

    

})


eyeIMG.addEventListener('click',e=>{
    e.target.classList.toggle('eyeactive')

    if(document.getElementById('pass').firstElementChild.type == 'password'){
        document.getElementById('pass').firstElementChild.type = 'text'
    }else{
        document.getElementById('pass').firstElementChild.type = 'password'
    }

})


            //                     PROJE SONU BİLGİLENDİRMELER
            //  mail'i regex'e dahil ettim çünkü etmediğim zaman validity'si ekrana gelmiyor
            //  if(ele.type == 'text' || ele.type == 'password') ile mail'i regex'e dahil etmeyebiliriz.