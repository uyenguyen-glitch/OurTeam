function getEle(id) {
  return document.getElementById(id);
}

function domClassName(number, display) {
  for (var i = 0; i < number; i++) {
    document.getElementsByClassName("fa")[i].style.display = display;
  }
}
function openNav() {
  if (screen.width >= 768) {
    getEle("mySidenav").style.width = "30%";
    getEle("btnOpen").style.display = "none";
    getEle("btnClose").style.display = "inline-block";
    getEle("logo-responsive").style.display = "block";
    getEle("logo-web").style.display = "none";
    domClassName(6, "inline-block");
    document.getElementById("main").style.marginLeft = "30%";
  } else if (screen.width <= 767.98) {
    getEle("mySidenav").style.width = "50%";
    getEle("btnOpen").style.display = "none";
    getEle("btnClose").style.display = "inline-block";
    getEle("logo-responsive").style.display = "block";
    getEle("logo-web").style.display = "none";

    domClassName(6, "inline-block");
    document.getElementById("main").style.marginLeft = "75%";
  }
}

function closeNav() {
  getEle("mySidenav").style.width = "0";
  getEle("btnOpen").style.display = "inline-block";
  getEle("btnClose").style.display = "none";
  getEle("logo-responsive").style.display = "none";
  getEle("logo-web").style.display = "inline-block";

  domClassName(6, "none");
  document.getElementById("main").style.marginLeft = "0";
}

// Change arrow of selection box
getEle("exampleFormControlSelect1").addEventListener("click", function () {
  if (getEle("fa-angle-down").style.display == "block") {
    getEle("fa-angle-down").style.display = "none";
    getEle("fa-angle-up").style.display = "block";
  } else {
    getEle("fa-angle-down").style.display = "block";
    getEle("fa-angle-up").style.display = "none";
  }
});
