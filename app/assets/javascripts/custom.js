function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "sub-nav-parent")  {
    x.className += " responsive";
  } else {
    x.className = "sub-nav-parent";
  }
}
