/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID
// 1 - Turn the one with the id 'first_ghost' orange

const firstGhost = document.getElementById("first_ghost");
firstGhost.style.fill = "orange";

// GET BY CLASSNAME
// 2 -Turn the ones with the class of 'second_wave' blue

const secondWave = document.getElementsByClassName("second_wave");
for (const ghost of secondWave) {
  ghost.style.fill = "blue";
}

// GET AREA, DRILL DOWN using GET BY TAG NAME
// 2 - Select Area 51, then select the svgs inside it and turn them green

const area51 = document.getElementById("area-51");
const aliens = area51.getElementsByTagName("svg");
for (const ghost of aliens) {
  ghost.style.fill = "green";
}
// querySelector nth-child
// 4 - Using querySelector (starting at the document level) and an nth-child-type css selector, make the penultimate ghost in area 51 have a red stroke with a strokeWidth of 15px

const middleGhost = area51.querySelector(".ghost:nth-child(3)");

middleGhost.style.stroke = "red";
middleGhost.style.strokeWidth = "15px";

// from the last child, select the div immediately above the ghost and make its border '5px dashed'
// 5 - Starting with that penultimate ghost you just selected, select the div immediately above the ghost and make its border '5px dashed'

const aboveMiddleGhost = middleGhost.previousElementSibling;
aboveMiddleGhost.style.border = "5px dashed";

// querySelectorAll
// 6 - Using querySelectorAll, select all the ghosts in the div which has an id of area-50 and turn them red

const area50 = document.getElementById("area-50");
const ghostsInArea50 = area50.querySelectorAll(".ghost");
for (const ghost of ghostsInArea50) {
  ghost.style.fill = "red";
}
