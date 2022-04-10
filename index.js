function myFunction() {
  var x = document.getElementById("nav_list_id");
  if (x.className === "nav_list") {
    x.className += " responsive";
  } else {
    x.className = "nav_list";
  }
}

/*
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
*/