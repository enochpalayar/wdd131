const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
const albumTitle = document.querySelector("#album-title");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    
    albumTitle.classList.toggle("hidden");
});

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

document.getElementById("lastModified").innerHTML = document.lastModified;
