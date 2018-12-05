let searchUser = document.getElementById("searchUser");

let github = new Github();
let ui = new UI();

searchUser.addEventListener("keyup", (e) => {
    let userText = e.target.value;

    if (userText !== '') {
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === "Not Found") {
                    //show Alert

                    ui.showAlert("User Not Found", 'alert alert-danger');
                } else {
                    //console.log(data)
                    //show Profile
                    ui.showprofile(data.profile)
                    ui.showrepos(data.repos)
                }
            });



    } else {
        //clear
        ui.clearProfile();
    }

});