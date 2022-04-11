// Created by: maliksalem1
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * Calculates fahrenheit to celsius and celsius to fahrenheit using the user's input. 
 */
function calculate(input) {
  if (input == 'fahrenheit') { // If the input is fahrenheit, do fahrenheit to celsius.
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)
    const answer = ((fahrenheit - 32) * (5/9)).toFixed(2)
    document.getElementById("output-celsius").innerHTML = "<p>This temperature is " + answer + "°C + in fahrenheit</p>"
}