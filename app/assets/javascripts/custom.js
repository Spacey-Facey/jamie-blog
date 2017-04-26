function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "sub-nav") {
        x.className += " responsive";
    } else {
        x.className = "sub-nav";
    }
}
