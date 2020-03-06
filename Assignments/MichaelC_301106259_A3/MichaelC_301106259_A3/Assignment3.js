var list = document.getElementById("navbar");
var newlink = document.createElement("a");
var newli = document.createElement("li");
newlink.href = "https://alorestaurant.com/";
newlink.innerHTML = "Location";
newli.appendChild(newlink);
list.appendChild(newli);