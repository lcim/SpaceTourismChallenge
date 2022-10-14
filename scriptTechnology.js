/* Click eventListener for Technology Page toggler */

const technologyLinks = document.getElementsByClassName("navbar-technology-links")[0];
const toggleButtonTechnology = document.getElementsByClassName("toggle-technology-icon")[0];
toggleButtonTechnology.addEventListener("click", () => {
    technologyLinks.classList.toggle("active-technology")
})


/* Switching toggle Icon Image */
const icon = document.querySelector(".toggle-technology-icon").querySelector(".fa-bars"); 
icon.addEventListener("click", () => {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times")
    //console.log(type(icon))
  } else {
    icon.classList.replace("fa-times", "fa-bars")
    //console.log(icon)
  }
})


/*  Removing the numbering of menu items for tablet devices */

function modifyMenuItemsTechnology(x) {
    const y = document.getElementById("id-navbar-technology");
    const anchorTags = y.getElementsByTagName("a");

    if (x.matches) { // If media query matches
        //document.body.style.backgroundColor = "yellow";

        for (i = 0; i < anchorTags.length; i++) {
            anchorTags[i].innerHTML = anchorTags[i].innerHTML.split("").splice(3).join("");
            //console.log(z[i].textContent)
        }
    } else {
        //document.body.style.backgroundColor = "orange";
        for (i = 0; i < anchorTags.length; i++) {
            if (anchorTags[i].innerHTML[0] != 0) {
                anchorTags[i].innerHTML = "0" + i + " " + anchorTags[i].innerHTML;
            }
        }
        return
    }
}

const checkDeviceWidthTechnology = window.matchMedia("(min-width: 480px) and (max-width: 768px)"); // query tablet device width
modifyMenuItemsTechnology(checkDeviceWidthTechnology); // Call listener function at run time


/* Inside technology page links - ACTIVE */

const activePageTech = window.location.pathname;
const navLinksTech = document.querySelectorAll('.technology-links a').forEach((link, index) => {
    if (link.href.includes(`${activePageTech}`)) {
        link.classList.add('active-technology');

        //console.log(link);
    }
    link.textContent = index + 1;
})

/* Mark a main menu active */
const menuIcons = document.querySelectorAll(".navbar-technology-links a");
menuIcons.forEach(link => {
    if (link.href.includes(`${activePageTech}`)) {
        link.classList.add("selected");
        //console.log(link);
    } else {
        document.querySelectorAll(".technology-links a").forEach(elem => {
            if (elem.href.includes(`${activePageTech}`)) {
                document.getElementById("id-navbar-technology").getElementsByTagName("a")[3].classList.add("selected")
                //console.log(elem)
            }
        })
    }
});