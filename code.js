const tabs = [
    "about",
    "iOS",
    "website",
    "resume",
    "contact"
]

function hideAllElements() {
    tabs.forEach(function(item) {
        document.getElementById(item).style.display = "none";
        document.getElementById(item + "-btn").classList.remove("active-btn");
    })
}

function showTab(id) {
    hideAllElements();
    document.getElementById(tabs[id]).style.display = "block";
    document.getElementById(tabs[id] + "-btn").classList.add("active-btn");
}

function showDescription() {
    console.log("work")
    document.getElementById("about-image").style.display = "none";
    document.getElementById("about-description").style.display = "block";
}