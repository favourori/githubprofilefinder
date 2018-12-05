class Github {
    constructor() {
        //add your Client ID and Secret Keys here:

        this.client_id = [insertHere];
        this.client_secret = [insertHere];
        this.repos_count = 6;
        this.repo_sort = 'created: asc';
    }


    async getUser(user) {

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const returnedRepos = await repoResponse.json();
        return {
            profile: profileData,
            repos: returnedRepos
        }

    }
}