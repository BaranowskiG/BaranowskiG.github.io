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
    document.getElementById("view").style.display = "none";
    document.getElementById("more").style.display = "block";
}

function hideDescription() {
    console.log("work")
    document.getElementById("view").style.display = "block";
    document.getElementById("more").style.display = "none";
}