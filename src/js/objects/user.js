const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers:'',
    following: '',
    events: [],
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.userName = gitHubUser.login
    },
    setEvent(events){
        this.events = events
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
}

export { user }