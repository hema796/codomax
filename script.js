// =======================================
// PORTFOLIO JAVASCRIPT
// =======================================

console.log("Welcome to Hemavarshini Portfolio");

// =======================================
// CONTACT FORM VALIDATION
// =======================================

const form = document.getElementById("contactForm");

if(form){

    form.addEventListener("submit",function(e){

        e.preventDefault();

        let valid = true;

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const messageError = document.getElementById("messageError");

        // Clear Errors

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        // Name Validation

        if(name.value.trim() === ""){

            nameError.textContent = "Please enter your name.";
            valid = false;

        }

        // Email Validation

        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(email.value.trim() === ""){

            emailError.textContent =
            "Please enter your email.";

            valid = false;

        }

        else if(!emailPattern.test(email.value.trim())){

            emailError.textContent =
            "Please enter a valid email.";

            valid = false;

        }

        // Message Validation

        if(message.value.trim() === ""){

            messageError.textContent =
            "Please enter your message.";

            valid = false;

        }

        if(valid){

            alert("Message Sent Successfully!");

            form.reset();

        }

    });

}

// =======================================
// SCROLL TO TOP BUTTON
// =======================================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =======================================
// ACTIVE NAVIGATION
// =======================================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",function(){

    let current = "";

    sections.forEach(function(section){

        const sectionTop =
        section.offsetTop - 120;

        const sectionHeight =
        section.offsetHeight;

        if(

            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight

        ){

            current = section.id;

        }

    });

    navLinks.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// =======================================
// SCROLL REVEAL ANIMATION
// =======================================

const revealItems = document.querySelectorAll(

".about-text,.skill-card,.education-card,.project-card,.experience-card,.contact-info,#contactForm"

);

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

},

{

    threshold:0.2

}

);

revealItems.forEach((item,index)=>{

    item.style.opacity = "0";

    item.style.transform =
    "translateY(80px)";

    item.style.transition =
    `all 0.7s ease ${index*0.12}s`;

    observer.observe(item);

});

// =======================================
// HERO BUTTON ANIMATION
// =======================================

const buttons =
document.querySelectorAll(".btn");

buttons.forEach((btn)=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform =
        "translateY(-6px) scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform =
        "translateY(0) scale(1)";

    });

});

// =======================================
// LOGO ANIMATION
// =======================================

const logo = document.querySelector(".logo");

if(logo){

    logo.addEventListener("mouseenter",()=>{

        logo.style.transform="rotate(-5deg) scale(1.1)";

    });

    logo.addEventListener("mouseleave",()=>{

        logo.style.transform="rotate(0deg) scale(1)";

    });

}
// =======================================
// SECTION TITLE ANIMATION
// =======================================

const titles =
document.querySelectorAll(".section-title");

titles.forEach(title=>{

    title.addEventListener("mouseenter",()=>{

        title.style.letterSpacing = "3px";

        title.style.transition = ".4s";

    });

    title.addEventListener("mouseleave",()=>{

        title.style.letterSpacing = "0px";

    });

});

// =======================================
// FOOTER YEAR
// =======================================

const footer =
document.getElementById("footerText");

footer.innerHTML =

`© ${new Date().getFullYear()} Hema s | All Rights Reserved`;

console.log("Portfolio Loaded Successfully!");
