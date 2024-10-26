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
