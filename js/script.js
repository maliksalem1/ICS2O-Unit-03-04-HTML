// Created by: maliksalem1
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates celsius and perimeter of rectangle.
 */
function calculate () {
  // input
  const celsius = parseInt(document.getElementById('farenheit').value)

  // process 
  const celsius = (5/9) * (farenheit - 32)

  // output
  document.getElementById('celsius').innerHTML = '<p>celsius is: ' + celsius.toString() + ' °C</p>'
}