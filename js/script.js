// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: domenic dangelo
// Created on: feb 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates wage.
 */
function calculateAreaOfTrapezoid() {
  // input
  const aBaseOfTrapezoid = parseFloat(document.getElementById("a-base").value)
  const bBaseOfTrapezoid = parseFloat(document.getElementById("b-base").value)
  const heightOfTrapezoid = parseFloat(document.getElementById("height").value)

  // process
  const areaOfTrapezoid =
    [(aBaseOfTrapezoid + bBaseOfTrapezoid) / 2] * heightOfTrapezoid

  // output
  document.getElementById("answer").innerHTML =
    "Area is: " + areaOfTrapezoid + " cm²"
}
