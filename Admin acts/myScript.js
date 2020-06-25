var mains = document.getElementById("main");
var members = document.getElementById("member");
var updates = document.getElementById("update");
var studies = document.getElementById("study");
function theLink1() {
document.getElementById("main").style = "display: block";
members.style = "display:none";
updates.style = "display:none";
studies.style = "display:none";
}

function theLink2() {
document.getElementById("member").style = "display: block";
mains.style = "display:none";
updates.style = "display:none";
studies.style = "display:none";
}

function theLink3() {
document.getElementById("update").style = "display: block";
mains.style = "display:none";
members.style = "display:none";
studies.style = "display:none";
}

function theLink4() {
document.getElementById("study").style = "display: block";
mains.style = "display:none";
members.style = "display:none";
updates.style = "display:none";
}