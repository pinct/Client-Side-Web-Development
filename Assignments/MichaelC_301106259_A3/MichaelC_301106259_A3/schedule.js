/*    JavaScript 6th Edition
 *    Assignment 2

 *    Variables and functions
 *    Author: Michael Courneya
 *    Date: 1/31/2020

 *    Filename: calendar.js
 */

// global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
var dineIn = ["Dine in", "Take out", "Dine in", "Dine in", "Take out", "Dine in", "Take out", "Dine in", "Dine in", "Dine in",
    "Take out", "Take out", "Take out", "Dine in", "Dine in", "Take out", "Take out", "Take out", "Dine in", "Take out",
    "Take out", "Dine in", "Dine in", "Dine in", "Take out", "Dine in", "Take out", "Take out", "Take out", "Take out", "Dine in"];
var person = ["Felix", "Tristan", "Brett", "Dash", "Isaac", "Amelia", "Nevin", "Evelyn",
    "Sharon", "Natalie", "Varian", "Nadeen", "Jeremy", "Byron", "Noah", "Benjamin", "Breean",
    "Korin", "Gillian", "Aryn", "Jax", "Carleen", "Dash", "Will", "Beck", "Caylen", "Riley",
    "Miriam", "Kai", "Lee", "Ann"];
var orders = ["Couscous", "Bratwurst", "Roast Chicken", "Yorkshire Pudding", "Ratatouille", "Schnitzel",
    "Spaghetti Bolognese", "Gyros", "Coleslaw", "Tiramisu", "Dulce De Leche", "Beef Wellington", "Quesadilla",
    "Chicken Nuggets", "Fried Egg", "Spaetzle", "Lasagne", "French Toast", "Curry", "Antipasto", "Sandwiches",
    "Fried Egg", "Baked Beans", "Chicken", "Eggs Benedict", "Mashed Potato", "Gyros", "Couscous",
    "Bratwurst", "Roast Chicken", "Yorkshire Pudding"];
function addColumnHeaders() {
    var i = 0;
    while (i < 7) {
        document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
        i++;
    }
}
function addCalendarDates() {
    var i = 1;
    var paragraphs = "";
    do {
        var tableCell = document.getElementById("01-" + i);
        paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[0].innerHTML = i;
        i++;
    } while (i <= 31);
}
function addPersonInfo() {
    var paragraphs = "";
    for (var i = 0; i < 31; i++) {
        var date = i + 1;
        var tableCell = document.getElementById("01-" + date);
        paragraphs = tableCell.getElementsByTagName("p");
        paragraphs[1].innerHTML = dineIn[i] + " (" + person[i] + ")";
        paragraphs[2].innerHTML = orders[i];
    }
}
function setUpPage() {
    addColumnHeaders();
    addCalendarDates();
    addPersonInfo();
}
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}