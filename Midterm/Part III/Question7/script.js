// Write a script that will calculate a person’s weight on each planet of the solar system, the sun, and the moon
// You should create an html form with text boxes for each planet (also the sun and moon)
// You should also have a text box for a person to enter their weight on Earth
// When the user clicks on a button, a javascript function should be called that calculates each weight and puts the results in the corresponding text boxes in the form
// Use the Math,round method to round the numbers to the nearest whole number.
// Here are the formulas for conversions:
// Mercury= weight * .378 
// Venus = weight * .907 
// Mars = weight * .377 
// Jupiter = weight * 2.364 
// Saturn = weight * .916 
// Uranus = weight * .889 
// Neptune = weight * 1.125 
// Pluto = weight * .067 
// Sun = weight * 27.072 
// Moon = weight * .166 
function calculateWeight() {
    var weight = document.getElementById('weight').value;
    var mercury = Math.round(weight * .378);
    var venus = Math.round(weight * .907);
    var mars = Math.round(weight * .377);
    var jupiter = Math.round(weight * 2.364);
    var saturn = Math.round(weight * .916);
    var uranus = Math.round(weight * .889);
    var neptune = Math.round(weight * 1.125);
    var pluto = Math.round(weight * .067);
    var sun = Math.round(weight * 27.072);
    var moon = Math.round(weight * .166);
    document.getElementById('mercury').value = mercury;
    document.getElementById('venus').value = venus;
    document.getElementById('earth').value = weight;
    document.getElementById('mars').value = mars;
    document.getElementById('jupiter').value = jupiter;
    document.getElementById('saturn').value = saturn;
    document.getElementById('uranus').value = uranus;
    document.getElementById('neptune').value = neptune;
    document.getElementById('pluto').value = pluto;
    document.getElementById('sun').value = sun;
    document.getElementById('moon').value = moon;

}