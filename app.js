var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//Bottom
context.rect(70,280,170,40);
context.fillStyle = "#733635";
context.strokeStyle = "#733635";
context.fill();
context.stroke();

//Mast
context.rect(150,100,10,180);
context.fillStyle = "#733635";
context.strokeStyle = "#733635";
context.fill();
context.stroke();

//Sun
var mouseX = 330;
var mouseY = 70;
function drawSun(){
    context.beginPath();
    context.arc(330,70,45,0,2*Math.PI,true);
    context.fillStyle = "yellow";
    context.strokeStyle = "yellow";
    context.fill();
    context.stroke();    
}

function getPosition(){
    context.clearrect(mouseX-50,mouseY-50,100,100);
    mouseX = event.clientX-canvas.offsetLeft;
    mouseY = event.clientY-canvas.offsetTop;
    drawSun();
}
drawSun();
canvas.addEventListener("mousemove",getPosition,false);

//Curvy Left Sail
context.beginPath();
context.moveTo(155,150);
context.quadraticCurveTo(95,180,85,260);
context.quadraticCurveTo(105,250,180,275);
context.quadraticCurveTo(135,200,145,145);
context.fillStyle = "white";
context.strokeStyle = "white";
context.fill();
context.stroke();

//Triangle Right Sail
context.beginPath();
context.moveTo(165,145);
context.lineTo(165,260);
context.lineTo(225,260);
context.closePath();
context.fill();
context.stroke();

//Flag
context.beginPath();
context.moveTo(145,110);
context.lineTo(145,140);
context.lineTo(110,125);
context.closePath();
context.fillStyle = "#EF0107";
context.strokeStyle = "#EF0107";
context.fill();
context.stroke();

context.beginPath();
context.font = "16px Arial "
context.fillText("A sailor's joys are as simple as a child's",5,20);
context.fill();

//Water
context.beginPath();
context.bezierCurveTo(0,300,350,350,400,300);
context.lineTo(400,400);
context.lineTo(0,400);
context.fillStyle = "blue";
context.strokeStyle = "blue";
context.fill();
context.stroke();  

//Bird1
context.beginPath();
context.moveTo(50,50);
context.quadraticCurveTo(70,70,80,50);
context.quadraticCurveTo(90,70,110,50);
context.strokeStyle = "black";
context.stroke();

//Bird2
context.beginPath();
context.moveTo(80,80);
context.quadraticCurveTo(100,100,110,80);
context.quadraticCurveTo(120,100,140,80);
context.strokeStyle = "black";
context.stroke();


//Sail Text
context.beginPath();
context.font = "700 20px sans-serif "
context.textStyle = "Blue"
context.strokeText("USA",167,250);
context.fill();
