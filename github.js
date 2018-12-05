class Github {
    constructor() {
        this.client_id = "59fa0990431f68971563";
        this.client_secret = "0aa13a50cfad65a657ad72936b386b6b10f9da72"
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