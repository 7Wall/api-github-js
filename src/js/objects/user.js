const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    events: [],
    repositories: [],
    forks: '',
    stars: '',
    watchers: '',
    language: '',
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.userName = gitHubUser.login
        this.forks = gitHubUser.forks_count
        this.stars = gitHubUser.stargazers_count
        this.watchers = gitHubUser.watchers_count
        this.language = gitHubUser.language
    },
    setEvent(events){
        this.events = events
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export { user }