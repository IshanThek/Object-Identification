function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
}

img="";

function preload(){
    img=loadImage("bg.jpg");
}

function draw(){
    image(img, 0, 0, 640, 430);
    fill("#FF0000");
    text("dog", 45, 75);
    noFill();
    stroke("#045643");
    rect(30, 60, 450, 350);
}