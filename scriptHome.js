/* Toggle Main Menu bar */
const toggleButton = document.getElementsByClassName('toggle-icon')[0]
const navbarLinks = document.getElementsByClassName('navbar')[0]
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});
/* Typing " ç " accidentally in "...('çlick', ()..." in place of " c " got me stuck for two days. Oh my God!
 */


/* Switching toggle Icon Image */
const icon = document.querySelector(".toggle-icon").querySelector(".fa-bars");
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

const decorImg = document.querySelector('.top-row-icon');
//console.log(decorImg)
const personalClass = document.querySelector(".personal");
//console.log(personalClass)
let highlighted = true;
decorImg.addEventListener("click", () => {
  highlighted = !highlighted;
  if (highlighted) {
    decorImg.src = "./assets/star64px.png";
  } else {
    decorImg.src = "assets/star-canceller-orange.png";
  }
})
decorImg.addEventListener("click", () => {
  personalClass.classList.toggle("personal-active");
})


/* Modifying main menu items to remove numbering */
function modifyMenuItems(x) {
  const y = document.getElementById("id-navbar");
  const z = y.getElementsByTagName("a");
  if (x.matches) { // If media query matches
    //document.body.style.backgroundColor = "yellow";
    for (i = 0; i < z.length; i++) {
      z[i].innerHTML = z[i].innerHTML.split("").splice(3).join("");
    }
  } else {
    //document.body.style.backgroundColor = "orange";
    for (i = 0; i < z.length; i++) {
      if (z[i].innerHTML[0] != 0) {
        z[i].innerHTML = "0" + i + " " + z[i].innerHTML;
      }
    }
    return
  }
}

const checkDeviceWidth = window.matchMedia("(min-width: 480px) and (max-width: 768px)");
//modifyMenuItems(checkDeviceWidth); // Call listener function at run time if using deprecated .addListener in: checkDeviceWidth.addListener( modifyMenuItems);
checkDeviceWidth.addEventListener("click", modifyMenuItems(checkDeviceWidth)); // Attach listener function on state changes

/* Mark a menu active */

const menuIconPath = window.location.pathname;
const menuIcons = document.querySelectorAll(".navbar a").forEach(link => {
  if (link.href.includes(`${menuIconPath}`)) {
    link.classList.add("selected");
    //console.log(link);
  }
});
