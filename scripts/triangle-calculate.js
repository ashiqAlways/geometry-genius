/**
 * Objective: get base, height of a tringle. Calculate the area by using the provided formula. And then display the area.
 * step-1: get base value of the triangle.
 * step-2: added  an id in the base input field.
 * step-3: use getElementById to access the input field.
 * step-4: get value from the input field. (value is string now).
 * step-5: convert the value to a number. use parseFloat.
 */

function calculateTriangleAria(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    // console.log(base);

    // get triangle height value
    const triangleHeightInpute = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInpute.value;
    const heiget = parseFloat(triangleHeightText);
    // console.log(heiget);
    
    // calculate triangle area
    const area = 0.5 * base * heiget;
    // console.log('area of the triangle is:', area);

    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area'); 
    triangleAreaSpan.innerText = area;
}