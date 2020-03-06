"use strict";
var formValidity = true

function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
        emptyBoxes[i].style.boxShadow = "none";
    }
}

function copyBillingAddress() {
    var billingInputElements = document.querySelectorAll("#billingAddress input");
    var deliveryInputElements = document.querySelectorAll("#deliveryAddress input");
    if (document.getElementById("same").checked) {
        for (var i = 0; i < billingInputElements.length; i++) {
            deliveryInputElements[i + 1].value = billingInputElements[i].value;
        }
        document.querySelectorAll("#deliveryAddress select")[0].value = document.querySelectorAll("#billingAddress select")[0].value;
        document.querySelectorAll("#deliveryAddress select")[1].value = document.querySelectorAll("#billingAddress select")[1].value;
    } else {
        for (var i = 0; i < billingInputElements.length; i++) {
            deliveryInputElements[i + 1].value = "";
        }
        document.querySelectorAll("#deliveryAddress select")[0].selectedIndex = -1;
        document.querySelectorAll("#deliveryAddress select")[1].selectedIndex = -1;
    }
}

function validateAddress(fieldsetId) {
    var inputElements = document.querySelectorAll("#" + fieldsetId + " input");
    var errorDiv = document.querySelectorAll("#" + fieldsetId + " .errorMessage")[0];
    var fieldsetValidity = true;
    var elementCount = inputElements.length;
    var currentElement;
    try {
        for (var i = 0; i < elementCount; i++) {
            // validate all input elements in fieldset
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.setCustomValidity("Please fill this out");
                currentElement.checkValidity();
                currentElement.style.background = "rgb(255,233,233)";
                fieldsetValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        currentElement = document.querySelectorAll("#" + fieldsetId + " select");
        // validate state select element
        for (var i = 0; i < currentElement.length; i++) {
            if (currentElement[i].selectedIndex === -1) {
                currentElement[i].style.border = "1px solid red";
                fieldsetValidity = false;
            } else {
                currentElement[i].style.border = "";
            }
        }
        if (fieldsetValidity === false) {
            // throw appropriate message based on current fieldset
            if (fieldsetId === "billingAddress") {
                throw "Please complete all Billing Address information.";
            } else {
                throw "Please complete all Delivery Address information.";
            }
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
}

function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault(); // prevent form from submitting
    } else {
        evt.returnValue = false; // prevent form from submitting in IE8
    }
    formValidity = true; // reset value for revalidation
    validateAddress("billingAddress");
    validateAddress("deliveryAddress");
    if (formValidity === true) {
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    } else {
        document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit.";
        document.getElementById("errorText").style.display = "block";
        scroll(0, 0);
    }
}

function createEventListeners() {

    var same = document.getElementById("same");
    if (same.addEventListener) {
        same.addEventListener("click", copyBillingAddress, false);
    } else if (same.attachEvent) {
        same.attachEvent("onclick", copyBillingAddress);
    }

    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}

function setUpPage() {
    createEventListeners();
    removeSelectDefaults();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}