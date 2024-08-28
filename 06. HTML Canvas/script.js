const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const boundingRect = canvas.getBoundingClientRect();

let coord = { x: 0, y: 0 };
function getPosition(event) {
  coord.x = event.offsetX;
  coord.y = event.offsetY;
}

let hue = 0;
let lastEvent = null;
let lineWidth = 50;
let subtracting = false;


function spamConsole(lastEvent) {
  while (lastEvent == "mousedown") {
    console.log("Hello World");
  }
}

canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mouseleave", stopPainting);
canvas.addEventListener("mousemove", sketch);



function startPainting(event) {
    lastEvent = "mousedown";

    getPosition(event);
}

function stopPainting() {
    lastEvent = "mouseup";
}


function sketch(event) {
  if (lastEvent == "mousedown") {
    

    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (subtracting) {
      lineWidth -= 1;
    } else {
      lineWidth += 1;
    }

    if (lineWidth <= 0) {
      subtracting = false
    } else if (lineWidth >= 50) {
      subtracting = true;
    }

    ctx.lineWidth = lineWidth

    
    
    // Rotate hue 
    if (hue >= 360) {
      hue = 0;
    }
    hue += 1;

    ctx.strokeStyle = `hsl(${hue} 100% 50%)`;

    ctx.moveTo(coord.x, coord.y);
    

    getPosition(event);

    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
  }
}

