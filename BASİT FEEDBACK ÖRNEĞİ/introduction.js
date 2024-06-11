const header = document.querySelector('header')
const tagImages = document.querySelectorAll('img')
const sendButton = document.querySelector('button')


function removeClass(){
    tagImages.forEach(ele =>{
        ele.classList.remove('active')
    })
}

tagImages.forEach(ele =>{
    ele.addEventListener('click',e=>{
        removeClass()
        e.target.classList.add('active')
        
    })
})


sendButton.addEventListener('click',e=>{
    tagImages.forEach(ele =>{
        if(ele.classList.value == 'active'){
            header.innerHTML = `<img draggable="false" id="heart" src="https://cdn-icons-png.flaticon.com/128/3756/3756484.png" height="70px" width="70px">
            <p>Geri bildiriminiz bizim için çok değerli.</p>
            <p>Geri Bildiriminiz: ${ele.closest('aside').dataset.status}</p>
            <div style="font-size: 13px;">Geri bildiriminizi kendimizi geliştirmek için kullanacağız.</div>`
        }
    })
})