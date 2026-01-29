const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
const albumTitle = document.querySelector("#album-title");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");

    const expanded = hamButton.classList.contains("open");
    hamButton.setAttribute("aria-expanded", expanded);
    albumTitle.classList.toggle("hidden");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Idaho Falls Idaho",
        location: "Idaho Falls, Idaho, United States",
        dedicated: "1945, September, 23",
        area: 85624,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/7-Idaho-Falls-Temple-1375367.jpg"
    },
    {
        templeName: "Portland Oregon",
        location: "Portland, Oregon, United States",
        dedicated: "1989, August, 19",
        area: 80500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/2018/400x250/Portland-Oregon-Temple10.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/400x250/manila-philippines-temple-lds-129585-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Phoenix Arizona",
        location: "Phoenix, Arizona, United States",
        dedicated: "2014, November, 16",
        area: 64870,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/pheonix-arizona/2018/400x250/Phoenix-Arizona-Temple-4-1300737.jpg"
    }
];

createTempleCard(temples);

document.getElementById("home").addEventListener("click", () => createTempleCard(temples));

document.getElementById("old").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear()< 1900))
});
document.getElementById("new").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000))
});
document.getElementById("large").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area> 90000))
});
document.getElementById("small").addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000))
});


function createTempleCard(filteredTemples) {
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let size = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;
        size.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(size);
        card.appendChild(img);

        document.querySelector(".gallery").appendChild(card)

    });
}