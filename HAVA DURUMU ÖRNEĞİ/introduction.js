const searchButton = document.querySelector('#search')
const HEADER = document.querySelector('header')
const tagInput = document.querySelector('input')


searchButton.addEventListener('click',e=>{

    let cityName = ''
    cityName = tagInput.value
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=aa775c4e30393b1b297f1b037e644b27&units=metric&lang=tr`
    
    async function GetWeather(){
        const res = await fetch(API_URL)
        let data = await res.json()

        let currentWeather = data.weather[0].main
        HEADER.innerHTML = `<nav>
        <input type="text" maxlength="20">
        <img id="search" src="https://www.svgrepo.com/show/532551/search-alt-1.svg" width="22px" height="24px">
    </nav>
    
    <main>
        <img id="situation" src="https://www.svgrepo.com/show/398412/sun.svg" height="80px" width="80px">
        <span>${Math.floor(data.main.temp)}°c</span>
        <div>${data.name}</div>

        <ul>
            <li>
                <img src="https://img.icons8.com/?size=50&id=18504&format=png" height="35px" width="35px">
                <footer>
                    <aside>${data.main.humidity}%</aside>
                    <aside>Nem</aside>
                </footer>
            </li>
            <li>
                <img src="	https://www.svgrepo.com/show/472900/wind.svg" height="30px" width="30px">
                <footer>
                    <aside>${data.wind.speed} km/h</aside>
                    <aside>Rüzgar</aside>
                </footer>
            </li>
        </ul>
    </main>`

    
        const situationIMG = document.getElementById('situation')
        if(currentWeather == 'Clear' || currentWeather == 'Clouds'){
            situationIMG.src = 'https://www.svgrepo.com/show/261720/cloudy-cloud.svg'
        }else if(currentWeather == 'Rain'){
            situationIMG.src = 'https://www.svgrepo.com/show/234675/rain.svg'
        }else if(currentWeather == 'Snow' || currentWeather == 'Snowy'){
            situationIMG.src = 'https://www.svgrepo.com/show/234674/snowflake-snow.svg'
        }else if(currentWeather == 'Sun' || currentWeather == 'Suny'){
            situationIMG.src = 'https://www.svgrepo.com/show/398412/sun.svg'
        }

    }
    GetWeather()
    
})

// EKSİKLERİM =  Sayfayı yenilemeden başka bir işlem yapmıyor.