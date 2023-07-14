const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML  = ` <div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                                <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                                                <div class="follow">
                                                    <p>Seguidores: ${user.followers}</p>
                                                    <p>Seguindo: ${user.following}</p>
                                                </div>
                                            </div>
                                        </div>`

        let eventItens = ''
        user.events.forEach(events => {if (events.type === 'CreateEvent' || events.type === 'PushEvent'){
            if (events.payload.commits) {
                eventItens += `<li><span class="event-name">${events.repo.name}</span> - ${events.payload.commits[0].message}</li>`
            } else if (events.type === 'CreateEvent'){
                eventItens += `<li><span class="event-name">${events.repo.name}</span> - ${events.payload.description}</li>`
            }
        }})

        if(user.events.length > 0 ) {
            this.userProfile.innerHTML += ` <div class = "events section">
                                                <h2>Eventos</h2>
                                                <br>
                                                <ul>${eventItens}</ul>
                                            </div>`
            
        } else {
            this.userProfile.innerHTML += ` <br>
                                            <p>Este usuário não possui eventos</p>`
        }


        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
                                                                        <section class="info">
                                                                            <span>🍴 : ${repo.forks ?? 0}</span>
                                                                            <span>⭐ : ${repo.stars ?? 0}</span>
                                                                            <span>👀 : ${repo.watchers ?? 0}</span>
                                                                            <span>${repo.language ?? ''}</span>
                                                                        </section>
                                                                    </a>
                                                                </li>`)

        if(user.repositories.length > 0) {
            this.userProfile.innerHTML += ` <div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado<h3>"
    }
}

export { screen }