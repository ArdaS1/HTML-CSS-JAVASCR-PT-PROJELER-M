const header = document.querySelector('header')


function creatMiniGame(){

    for(let i = 1; i <= 500;i++){
        const color = ['red','yellow','blue','blueviolet','lime','orange','white','bisque','pink']
        const randomColor = Math.floor(Math.random() * color.length)

        const newCreatDiv = document.createElement('div')
        header.append(newCreatDiv)
        
        newCreatDiv.addEventListener('mouseover',e=>{
            e.target.style.backgroundColor = color[randomColor]
            e.target.style.transition = ''
        })
        newCreatDiv.addEventListener('mouseout',e=>{
            e.target.style.backgroundColor = 'black'
            e.target.style.transition = 'background-color,600ms'
        })
    }

}
creatMiniGame()