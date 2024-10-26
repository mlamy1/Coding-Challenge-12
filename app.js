// Task 2: Configure the JavaScript for Drawing Context
//2D drawing context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//variables
let drawing = false;
let startX, startY;

// Event listeners for mouse events
canvas.addEventListener('mousedown', (e) => { //variables
    drawing = true;
    startX = e.offsetX; 
    startY = e.offsetY;
});
canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); //Used to clear the shape area
        drawShape(e.offsetX, e.offsetY);
    }
});
canvas.addEventListener('mouseup', () => { 
    drawing = false;
});
canvas.addEventListener('mouseout', () => {
    drawing = false;
});

// Task 3: Implement Shape Drawing Logic
function drawShape(x, y) { // Used to add shape selection and color input (Task 4)
    const shape = document.querySelector('input[name="shape"]:checked').value; 
    const color = document.getElementById('colorPicker').value; // Task 4 Add Color
    ctx.strokeStyle = color; // Set stroke color

    ctx.beginPath(); //Drawing path 

    if (shape === 'line') { // draw a line if line shape is selected 
        ctx.moveTo(startX, startY);
        ctx.lineTo(x, y);
        ctx.stroke();
    } else if (shape === 'rectangle') { // draw a rectangle if rectangle shape is selected
        ctx.rect(startX, startY, x - startX, y - startY);
        ctx.stroke();
    } else if (shape === 'circle') { // draw a circle if circle shape is selected 
        const radius = Math.sqrt(Math.pow(x - startX, 2) + Math.pow(y - startY, 2));
        ctx.arc(startX, startY, radius, 0, Math.PI * 2);
        ctx.stroke();
    }
}

// Task 4: Canvas Clearing 
document.getElementById('clearCanvas').addEventListener('click', () => { // Used to activate clear canvas button
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
});
