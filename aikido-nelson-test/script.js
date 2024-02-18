function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}


// back-to-top button: scroll back to top
const totop = () => window.scroll({
  top: 0, left: 0, behavior: "smooth"
});

function buttonhover() {
  document.getElementById("backtop").classList.add("hover");
}
function buttonout() {
  document.getElementById("backtop").classList.remove("hover");
}

// back-to-top button: show or hide with position
const togtop = () => {
  if (window.scrollY >= 100) {
    document.getElementById("backtop").classList.add("show");
  } else {
    document.getElementById("backtop").classList.remove("show");
  }
};
window.addEventListener("scroll", togtop);
window.addEventListener("resize", togtop);