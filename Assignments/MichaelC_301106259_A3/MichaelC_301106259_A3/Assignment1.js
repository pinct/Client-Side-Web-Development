function CalculateBMR() {
            var BMR = 0.0;
            var age = document.getElementById("Age").value;
            var feet = document.getElementById("Feet").value;
            var inches = document.getElementById("Inches").value + (feet * 12);
            var pounds = document.getElementById("Pounds").value;
            var activity = 0.0;
            if (document.getElementById("male").checked){
                BMR = (66 + (6.2 * pounds) + (12.7 * inches) - (6.76 * age));
            }
            else if (document.getElementById("female").checked){
            	BMR = (655.1 + (4.35 * pounds) + (4.7 * inches) - (4.7 * age));
            }
            if (document.getElementById("light").checked){
            	activity = 1.53;
            }
            else if (document.getElementById("moderate").checked){
            	activity = 1.76;
            }
            else if (document.getElementById("vigorous").checked){
            	activity = 2.25;
            }
            var TEE = activity * BMR;
    (BMR != 0 && TEE != 0 && age && feet && inches && pounds) ? alert("BMR: " + BMR + "\nTEE: " + TEE) : alert("Please fill out all forms.");
}
document.getElementById("CalculateButton").addEventListener("click", CalculateBMR, false);