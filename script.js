let github = document.getElementById("github");

github.addEventListener("click", openGithub);

function openGithub() {
    let app = document.getElementById("app_name").innerHTML;
    window.open("https://github.com/BaranowskiG/"+app);
}

let appStore = document.getElementById("app_store");

appStore.addEventListener("click", openSevir);

function openSevir() {
    window.open("https://apps.apple.com/us/app/sevir/id1564315834")
}