const text = [
    "Web Developer",
    "Python Learner",
    "Frontend Beginner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type, 1000);

    }
    else{

        setTimeout(type, 150);
    }
}

type();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 100){

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {

    hiddenElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(elementTop < windowHeight - 100){

            element.classList.add("show");
        }
    });
});