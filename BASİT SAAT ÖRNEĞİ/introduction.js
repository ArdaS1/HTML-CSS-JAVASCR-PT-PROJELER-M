const tagDivs = document.querySelectorAll('div')


function TimeZone(){

    const localDate = new Date()

    tagDivs.forEach(ele =>{

        if(ele.id == 'hours'){
            ele.textContent = localDate.toLocaleTimeString().slice(0,2)
        }
        
        if(ele.id == 'minutes'){
            ele.textContent = localDate.toLocaleTimeString().slice(3,5)
        }
    
        if(ele.id == 'seconds'){
            ele.textContent = localDate.toLocaleTimeString().slice(6,8)
        }
    }) 
}
setInterval(TimeZone,1000)
