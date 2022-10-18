/* Click eventListener for toggling destination page menu */
const toggleButtonDestination = document.getElementsByClassName('toggle-destination-icon')[0];
//console.log(toggleButtonDestination);
const navbarLinksDestination = document.getElementsByClassName('navbar-destination-links')[0];
toggleButtonDestination.addEventListener('click', () => {
    navbarLinksDestination.classList.toggle('active')
});


/* Switching toggle Icon Image */
const icon = document.querySelector(".toggle-destination-icon").querySelector(".fa-bars");
icon.addEventListener("click", () => {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times")
    //console.log(icon)
  } else {
    icon.classList.replace("fa-times", "fa-bars")
    //console.log(icon)
  }
})



/* toggle decorative image */

const decorImg = document.querySelector('.navbar-destination-icon');
//console.log(decorImg)
const personalClass = document.querySelector(".personal");
console.log(personalClass)
let highlighted = true;
decorImg.addEventListener("click", () => {
  highlighted = !highlighted;
  if (highlighted) {
    decorImg.src = "assets/star64px.png";
  } else {
    decorImg.src = "assets/star-canceller-orange.png";
  }
})
decorImg.addEventListener("click", () => {
  personalClass.classList.toggle("personal-active");
})


//    Highlighting active page

const activePageDestination = window.location.pathname;
const navLinks = document.querySelectorAll('.destination-links a');
navLinks.forEach(linky => {
    if (linky.href.includes(`${activePageDestination}`)) {
        //console.log(linky);
        linky.classList.add('active-destination');
        //console.log(linky);
        //console.log(linky.textContent === "Mars")
    }
})

/* Mark a main menu active */
const menuIcons = document.querySelectorAll(".navbar-destination-links a");
menuIcons.forEach(link => {
    if (link.href.includes(`${activePageDestination}`)) {
        link.classList.add("selected");
        //console.log(link);
    } else {
        document.querySelectorAll(".destination-links a").forEach(elem => {
            if (elem.href.includes(`${activePageDestination}`)) {
                document.getElementById("id-navbar-destination").getElementsByTagName("a")[1].classList.add("selected")
                console.log(elem)
            }
        })
    }
});

