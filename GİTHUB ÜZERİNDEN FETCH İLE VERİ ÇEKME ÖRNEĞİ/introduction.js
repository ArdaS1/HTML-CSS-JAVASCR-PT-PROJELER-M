const API_URL = 'https://api.github.com/users'
const inputSearch = document.querySelector('input')


async function GithubUsersAPI(){
    let res = await fetch(API_URL)
    let data = await res.json()
    for(let i = 0; i < data.length;i++){
        let newFetchRes = await fetch(data[i].url)
        let newFetchData = await newFetchRes.json()

        let newHeaderUser = document.createElement('header')
        newHeaderUser.id = `${data[i].id}`

        newHeaderUser.innerHTML = `<aside>
        <img src="${data[i].avatar_url}" height="110px" width="110px">
        <span class="name">${data[i].login}</span>
        <a href="${data[i].html_url}" class="profile" target="_blank">@${data[i].login}</a>
        <strong></strong>
    </aside>

    <ul>
        <li>
            <i class="fa fa-users followers"> ${newFetchData.followers}</i>
            <div>Followers</div>
        </li>

        <li>
            <i class="following">${newFetchData.following}</i>
            <div>Following</div>
        </li>

        <li>
            <i class="fa fa-bookmark repo"> ${newFetchData.public_repos}</i>
            <div>Repositories</div>
        </li>
    </ul>`
        document.body.append(newHeaderUser)

        inputSearch.addEventListener('input',e=>{
            const tagSpans = document.querySelectorAll('span')

            tagSpans.forEach(ele =>{
                if(!ele.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                    ele.closest('header').classList.add('active')
                }else{
                    ele.closest('header').classList.remove('active')
                }
            })

        })
        
    }

    
}

GithubUsersAPI()

