const tagButton = document.querySelector('button')
const tagInput = document.querySelector('input')
const QR = document.querySelector('img')


function creatQR(){
    if(tagInput.value == ''){
        alert('Lütfen Boş Bırakmayınız..')
    }
    else{
        QR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${tagInput.value}`
        QR.classList.add('active')
        tagInput.value = ''
    }
}

tagButton.addEventListener('click',e=>{
    creatQR()
})
tagInput.addEventListener('keyup',e=>{
    if(e.key == 'Enter'){
        creatQR()
    }
})