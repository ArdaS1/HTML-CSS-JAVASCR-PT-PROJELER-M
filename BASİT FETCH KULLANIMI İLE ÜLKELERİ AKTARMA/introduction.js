const API_URL = 'https://restcountries.com/v2/all'
const tagHeader = document.querySelector('header')

const country = []

async function fetchCountry(){
    const response = await fetch(API_URL)
    const data = await response.json()
    data.forEach(ele =>{
        country.push(ele.name)
    })
    let finalCountry = country
    
    for(let i = 0; i < 250;i++){
        const tagDiv = document.createElement('div')
        tagDiv.textContent = finalCountry[i]
        tagHeader.append(tagDiv)
    }
}

fetchCountry()

