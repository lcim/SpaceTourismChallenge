
/* Click eventListener for crews page */
const toggleButtonCrew = document.getElementsByClassName('toggle-crew-icon')[0]
const navbarLinksCrew = document.getElementsByClassName('navbar-crew-links')[0]
toggleButtonCrew.addEventListener('click', () => {
    navbarLinksCrew.classList.toggle('active')
}); 


/* Switching toggle Icon Image */
const icon = document.querySelector(".toggle-crew-icon").querySelector(".fa-bars");
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

const decorImg = document.querySelector('.navbar-crew-icon');
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

/*
const check = window.matchMedia("(min-width: 480px) and (max-width: 768px)");
const ankor = document.querySelectorAll(".navbar-crew-links a"); ankor.forEach((elem, index, arr) => {
  console.log(elem.textContent[0])
  
  if (check.matches && (elem.innerHTML[0] === 0)) {
    elem.textContent = elem.textContent.split("").splice(3).join(""); 
  } else {
    elem.textContent = elem.textContent;
  }
})
*/

/* Function for crews page */

function modifyMenuItemsCrew(x) {
  const y = document.getElementById("id-navbar-crew");
  const z = y.getElementsByTagName("a");
  
  if (x.matches) {// If media query matches
    //document.body.style.backgroundColor = "yellow";
    
    for (i = 0; i < z.length; i++) {
      z[i].innerHTML = z[i].innerHTML.split("").splice(3).join("");
      //console.log(z[i].textContent)
    }
        } else {
      //document.body.style.backgroundColor = "orange";
      for(i = 0; i < z.length; i++) {
        if (z[i].innerHTML[0] != 0 ) {
          z[i].innerHTML = "0" + i + " " + z[i].innerHTML;
      }
    }return
  }
}

/* Mark a Inner page menu active */
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.crew-links a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    //console.log(link);
  }
  if (link.textContent[0] !== "") {
    link.textContent = "";
  } else {
    link.textContent = link.textContent;
  };
})


/* Mark a main menu active */
const menuIcons = document.querySelectorAll(".navbar-crew-links a");
menuIcons.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("selected");
        //console.log(link);
    } else {
        document.querySelectorAll(".crew-links a").forEach(elem => {
            if (elem.href.includes(`${activePage}`)) {
                document.getElementById("id-navbar-crew").getElementsByTagName("a")[2].classList.add("selected")
                //console.log(elem)
            }
        })
    }
});


/* OR Still though I am not sure how well this works:
const activePage = window.location.href;
const navLinks = document.querySelectorAll('.crew-links a').forEach(link => {
  if(link.href === (`${activePage}`)){
    link.classList.add('active');
    //console.log(link);
  }
  link.textContent = "";
})
*/

const checkDeviceWidthCrew = window.matchMedia("(min-width: 480px) and (max-width: 768px)"); // query tablet device width
modifyMenuItemsCrew(checkDeviceWidthCrew); // Call listener function at run time
//checkDeviceWidth.addEventListener('click', modifyMenuItems(checkDeviceWidth)); // Attach listener function on state changes
//checkDeviceWidthCrew.addEventListener("click", modifyMenuItemsCrew(checkDeviceWidthCrew)); // Attach listener function on state changes Need to try this: addEventListener('click', modifyMenuItemsCrew);

//const checkMobileWidth = window.matchMedia("(min-width: 770px)"); // query device width less than desktop width

//makeTagActive(); // Call listener function

