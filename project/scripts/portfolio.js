/*Navigation Bar*/
//For responsive mobile view I put a Hambutton for navigation bar
const hamButton = document.querySelector("#menu");
const closeButton = document.querySelector("#close");
const navigation = document.querySelector(".nav-links");

if (hamButton && closeButton && navigation) {
    hamButton.addEventListener("click", () => {
        navigation.classList.add("open");
        hamButton.setAttribute("aria-expanded", "true");
    });

    closeButton.addEventListener("click", () => {
        navigation.classList.remove("open");
        hamButton.setAttribute("aria-expanded", "false");
    });
}
/*INDEX PAGE*/
//This gives greeting to  the page visitor depending on time they visit
// It returns a time - based greeting string(Morning, Afternoon, or Evening)
//based on the local system clock
function greeting() {
    const hour = new Date().getHours();
    return hour < 12 ? `Good morning` : hour < 18 ? `Good afternoon` : `Good evening`;
}

// DOM manipulation
document.addEventListener("DOMContentLoaded", () => {
    const greetEl = document.querySelector("#greeting");
    if (greetEl) {
        greetEl.textContent = `${greeting()},`;
    }
});

/* LIGHTBOX
   I built this to create a pop-up so that when a user clicks a project image, 
   this captures that image's source and displays it in a full-screen 
  without leaving the current page. I get the inspiration from 
   how Google drive works whenever a small image is click. 
*/
function openLightbox(src, caption) {
    const lightbox = document.querySelector("#lightbox");
    const lightboxImg = document.querySelector("#lightbox-img");
    const lightboxCap = document.querySelector("#lightbox-caption");

    if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightboxCap.textContent = caption;
        lightbox.style.display = `flex`;
        document.body.style.overflow = `hidden`; 
    }
}

document.addEventListener("click", (e) => {
    const lightbox = document.querySelector("#lightbox");
    if (e && (e.target.classList.contains("close-lightbox") || e.target === lightbox)) {
        lightbox.style.display = `none`;
        document.body.style.overflow = `auto`;
    }
});

/*ABOUT PAGE*/
// Arrays 
const goals = [
    "Graduate BS Software Development",
    "Become a Cloud Professional",
    "Package VA + Funnel services into clear offers",
    "Develop digital templates and business for passive income",
    "Establish a sustainable tech-driven business that helps a lot of people and client"
];

const interests = [
    "Building, optimizing and strategizing funnels",
    "Help business growth through strategic tech solutions",
    "Learning Web design and responsive UI/UX",
    "Project management and workflow optimization",
    "Learning new things that will build my career to serve better"
];

const skills = [
    "Virtual Assistance & Executive Support",
    "Funnel Building & Strategy",
    "Web Design (HTML, CSS, JS)",
    "Graphic Design (Adobe Creatives and Canva)",
    "Project Management Tools (Trello, Asana, Slack)",
    "Basic Bookkeeping (QuickBooks Online)",
];

document.addEventListener("DOMContentLoaded", () => {
    renderList("goalsList", goals);
    renderList("interestsList", interests);
    renderList("skillsList", skills);
});

function renderList(id, items) {
    const container = document.getElementById(id);
    if (!container) return;
    container.innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

/* PROJECT PAGE*/
const designProjects = [
    { image: "images/flyer-1.png", caption: "Assisted Living Flyer"},
    { image: "images/flyer-2.png", caption: "Compunded Thyroid Flyer" },
    { image: "images/flyer-3.png", caption: "Pharmacy Moving Flyer" },
    { image: "images/flyer-4.png", caption: "Blister Pack Flyer" },
    { image: "images/flyer-5.png", caption: "Vaccines Flyer" }, 
    { image: "images/flyer-6.png", caption: "Blood Testing Flyer" },
    { image: "images/flyer-7.png", caption: "Vaccine Flyer" },
    { image: "images/flyer-8.png", caption: "Medication for Teeth" },
    { image: "images/flyer-9.png", caption: "Thyroid Flyer" },
];

const funnelProjects = [
    { image: "images/funnel-1.png", caption: "Lead Funnel" },
    { image: "images/funnel-2.png", caption: "Sales Funnel" }
];

const courseProjects = [
    { image: "images/wdd-course.png", caption: "First Website Project", link: "https://enochpalayar.github.io/wdd131/index.html" },
    { image: "images/country-page.png", caption: "Country Page", link: "https://enochpalayar.github.io/wdd131/place.html" },
    { image: "images/temple-album.png", caption: "Responsive Temple Album Website", link: "https://enochpalayar.github.io/wdd131/filtered-temples.html" },
    { image: "images/product-review.png", caption: "Product Review Website", link: "https://enochpalayar.github.io/wdd131/form.html" }
];

const workOutputs = [
    { image: "images/pharm-catalog.png", caption: "Pharmacy Catalog", link: "https://drive.google.com/file/d/16wOgSWp2I4g7l9wTyshfMi1blm7-WCzH/view?usp=sharing" },
    { image: "images/research.png", caption: "Research Report", link: "https://drive.google.com/file/d/1RRASkrW0TNn5fkWABtu6J6W3p3ieoI72/view?usp=sharing" },
    { image: "images/lead-generation-1.png", caption: "Lead Generation Screenshot" },
    { image: "images/lead-generation-2.png", caption: "Lead Generation Screenshot" },
    { image: "images/calendar-management.png", caption: "Calendar Management" }
];

/* CAROUSEL/SLIDER:
   This function takes an Array of project/workoutputs and builds the HTML automatically. 
   It also tracks the scroll position to show which slide the user is on. I searched about
   this to make carousel as I have seen in some website to organize my images in my page. 
*/
function setupCarousel(id, indicatorId, items) {
    const container = document.getElementById(id);
    const indicator = document.getElementById(indicatorId);
    if (!container || !indicator) return;

    container.innerHTML = items.map(item => {
        const content = item.link
            ? `<a href="${item.link}" target="_blank"><img src="${item.image}" alt="${item.caption}" loading="lazy"></a>`
            : `<img src="${item.image}" alt="${item.caption}" loading="lazy" onclick="openLightbox('${item.image}', '${item.caption}')">`;

        return `
            <div class="slide">
                ${content}
                <div class="caption">${item.caption}</div>
            </div>
        `;
    }).join("");

    // This is for Scroll Indicator
    container.addEventListener("scroll", () => {
        const slides = container.querySelectorAll(".slide");
        if (slides.length > 0) {
            const slideWidth = slides[0].offsetWidth + 16;
            const index = Math.round(container.scrollLeft / slideWidth) + 1;
            indicator.textContent = `Slide ${index} of ${items.length}`;
        }
    });

    indicator.textContent = `Slide 1 of ${items.length}`;
}

document.addEventListener("DOMContentLoaded", () => {
    setupCarousel("designCarousel", "designIndicator", designProjects);
    setupCarousel("funnelCarousel", "funnelIndicator", funnelProjects);
    setupCarousel("courseCarousel", "courseIndicator", courseProjects);
    setupCarousel("assistantCarousel", "assistantIndicator", workOutputs);
});


/*CONTACT PAGE*/
function saveForm(event) {
    const contactData = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
        timestamp: new Date().toLocaleString()
    };

    localStorage.setItem("contactForm", JSON.stringify(contactData));
    localStorage.setItem("submitted", "true");
}

/*SUBMITTED PAGE*/
document.addEventListener("DOMContentLoaded", () => {
    const countDisplay = document.querySelector("#reviewCount");
    const thanksName = document.querySelector("#thanks-name");

    if (countDisplay) {
        const submitted = localStorage.getItem("submitted");

        let currentCount = Number(localStorage.getItem("submissionCount")) || 0;

        if (submitted === "true") {
            currentCount++;
            localStorage.setItem("submissionCount", currentCount);
            localStorage.removeItem("submitted");
        }

        countDisplay.textContent = currentCount;

        const nameData = localStorage.getItem("contactForm");
        if (nameData) {
            const data = JSON.parse(nameData);
            if (data.name && thanksName) {
                thanksName.textContent = `Thank you, ${data.name}!`;
            }
        }
    }
});

const currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;

