function myopen() {
    document.getElementById("myOverlay").style.display = "block";
}
function myclose() {
    document.getElementById("myOverlay").style.display = "none";
}
function next() {
    document.getElementById("nextPage").style.display = "block";
}
function myhide() {
    document.getElementById("nextPage").style.display = "none";
}
function mydied() {
    document.getElementById("page").style.display = "none";
}
function openpage() {
    document.getElementById("nextPage").style.display = "block";
}
function openabout() {
    document.getElementById("aboutPage").style.display = "block";
}
function closeabout() {
    document.getElementById("aboutPage").style.display = "none";
}
function opencontact() {
    document.getElementById("openContact").style.display = "block";
}
function closecontact() {
    document.getElementById("openContact").style.display = "none";
}
var tablinks = document.getElementsByClassName("but");
var tabcontents = document.getElementsByClassName("image");
function opentab(number) {
    for ( tablink of tablinks) {
        tablink.classList.remove("active");
    }
    for ( tabcontent of tabcontents) {
        tabcontent.classList.remove("active-image");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(number).classList.add("active-image");
}
var links = document.getElementsByClassName("list")
var contents = document.getElementsByClassName("image");
function openphoto(tabname) {
    for ( link of links) {
        link.classList.remove("list-active");
    }
    for ( content of contents) {
        content.classList.remove("active-image");
    }
    event.currentTarget.classList.add("list-active");
    document.getElementById(tabname).classList.add("active-image");
}

function opentest() {
    document.getElementById("page").style.display = "block";
}
