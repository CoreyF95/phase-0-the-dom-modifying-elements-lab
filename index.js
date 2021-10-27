const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = document.getElementById("main").innerHTML;
document.getElementById("main").remove();
