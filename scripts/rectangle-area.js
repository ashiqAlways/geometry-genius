function calculateRectangleArea(){
    // get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);

    // get widht of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);

    // calculate rectangle area
    const area = length * width;

    // display rectangle area
    const rectangleAreaSapan = document.getElementById('rectangle-area');
    rectangleAreaSapan.innerText = area;
}