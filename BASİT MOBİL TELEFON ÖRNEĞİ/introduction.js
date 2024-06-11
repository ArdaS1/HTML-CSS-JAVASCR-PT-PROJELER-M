const menuDivs = document.querySelectorAll('div')
const tagIMG = document.querySelector('img')

function removeClass(){
    menuDivs.forEach(ele =>{
        ele.classList.remove('active')
    })
}

menuDivs.forEach(ele =>{
    ele.addEventListener('click',e=>{
        removeClass()
        e.target.closest('div').classList.add('active')   // bu işlemi div in içerisindeki i veya span'a da click olduğu için yaptık, yoksa e.target.classList.add('active') komutuda işimizi görürdü

        if(e.target.classList.value.includes('aboutme')){
            tagIMG.src = 'https://m.media-amazon.com/images/I/81CoFpG8zXL._AC_UF1000,1000_QL80_.jpg'
        }else if(e.target.classList.value.includes('blog')){
            tagIMG.src = 'https://img.freepik.com/premium-psd/laptop-messy-desk_53876-156696.jpg?w=360'
        }else if(e.target.classList.value.includes('roadmap')){
            tagIMG.src = 'https://ae01.alicdn.com/kf/Sad032095824e499cb975f52d5719615ay.jpg_640x640Q90.jpg_.webp'
        }else if(e.target.classList.value.includes('contact')){
            tagIMG.src = 'https://jobsgo.vn/blog/wp-content/uploads/2023/03/thong-tin-ve-Contact.jpg'
        }

    })

})


