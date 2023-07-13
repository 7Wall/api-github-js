import { baseUrl, repositoriesQuantity } from "/src/js/variables.js"
import { getUser } from "/src/js/services/user.js"
import { getRepositories } from "/src/js/services/repositories.js"
import { getEvents } from "/src/js/services/events.js"
import { user } from "/src/js/objects/user.js"
import { screen } from "/src/js/objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () =>{
    const userName = document.getElementById('input-search').value

    if(validateEmptyInput(userName)){
        return
    }

    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) =>{
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(validateEmptyInput(userName)){
        return
    }

    if(isEnterKeyPressed){
        getUserData(userName)
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuário do Github')
        return true
    }
}

async function getUserData(userName){
    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    
    const eventResponse = await getEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvent(eventResponse)

    screen.renderUser(user)
}
