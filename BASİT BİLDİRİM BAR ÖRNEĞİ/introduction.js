const buttonNotification = document.querySelectorAll('button')
const tagHeader = document.querySelector('header')


buttonNotification.forEach(ele =>{
    ele.addEventListener('click',e=>{

        if(e.target.id == 'success'){
            const succText = 'Başarılı İşlem'
            const succDiv = document.createElement('div')
            const succI = document.createElement('i')
            const succSpan = document.createElement('span')

            succDiv.classList.add('success')
            succI.classList.add('fa')
            succI.classList.add('fa-check')

            succDiv.append(succText)
            succDiv.append(succI)
            succDiv.append(succSpan)

            tagHeader.append(succDiv)

            setTimeout(()=>{
                succDiv.style.transform = 'translateX(0px)'
            },100)

            setTimeout(()=>{
                succDiv.remove()
            },4000)
        }


        if(e.target.id == 'error'){
            const errorText = 'Başarısız İşlem'
            const errorDiv = document.createElement('div')
            const errorI = document.createElement('i')
            const errorSpan = document.createElement('span')

            errorDiv.classList.add('error')
            errorI.classList.add('fa')
            errorI.classList.add('fa-close')

            errorDiv.append(errorText)
            errorDiv.append(errorI)
            errorDiv.append(errorSpan)

            tagHeader.append(errorDiv)

            setTimeout(()=>{
                errorDiv.style.transform = 'translateX(0px)'
            },100)

            setTimeout(()=>{
                errorDiv.remove()
            },4000)
        }


        if(e.target.id == 'invalid'){
            const invalidText = 'Hatalı İşlem'
            const invalidDiv = document.createElement('div')
            const invalidI = document.createElement('i')
            const invalidSpan = document.createElement('span')

            invalidDiv.classList.add('invalid')
            invalidI.classList.add('fa')
            invalidI.classList.add('fa-exclamation')

            invalidDiv.append(invalidText)
            invalidDiv.append(invalidI)
            invalidDiv.append(invalidSpan)

            tagHeader.append(invalidDiv)

            setTimeout(()=>{
                invalidDiv.style.transform = 'translateX(0px)'
            },100)

            setTimeout(()=>{
                invalidDiv.remove()
            },4000)
        }

        
    })
})