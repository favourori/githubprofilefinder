class UI {
    constructor() {
        this.profile = document.getElementById("profile");
    }

    showprofile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a class="btn btn-danger btn-block mb-2" href="${user.html_url}" target="_blank">View Profile</a>
        </div>

        <div class="col-md-9">
        <span class="badge badge-primary"> Public Repo: ${user.public_repos}</span>
        <span class="badge badge-secondary"> Public Gists: ${user.public_gists}</span>
        <span class="badge badge-success"> Followers: ${user.followers}</span>
        <span class="badge badge-info"> Following: ${user.following}</span>
        <br/><br/>

        <ul class="list-group">
        <li class="list-group-item">Company: ${user.company} </li>
        <li class="list-group-item">Website: ${user.blog} </li>
        <li class="list-group-item">Location: ${user.location} </li>
        <li class="list-group-item">Member Since: ${user.created_at} </li>
        </ul>
        </div>

        </div>
        </div>

        <h3 class="page-heading mb-3"> Latest Repos</h3>
        <div id="repos">
        
        </div>
       `
    }

    clearProfile() {
        this.profile.innerHTML = ""
    }




    showrepos(repos) {
        let output = '';

        repos.forEach(function (repo) {
            output += `

            <div class="card card-body mb-2">
            <div class="row">
            <div class="col-md-6">
          <a href="${repo.html_url}">  ${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary"> Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-danger"> Watcher: ${repo.watchers_count}</span>
            <span class="badge badge-secondary"> Forks: ${repo.forms_count}</span>
            </div>
            </div>
            </div>
`
        });


        let display = document.getElementById("repos");
        display.innerHTML = output;
    }

    showAlert(msg, style) {

        //clear 
        ui.clearAlert()

        const div = document.createElement('div');
        div.className = style;
        div.id = "alertDisplay"

        div.appendChild(document.createTextNode(msg));
        //get Parent

        let display = document.getElementById("alertArea");

        display.appendChild(div);

        setTimeout(() => {
            div.remove();
        }, 3000);
    }


    clearAlert() {
        let alert = document.getElementById("alertDisplay");

        if (alert) {
            alert.remove();
        }

    }
}