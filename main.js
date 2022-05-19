function preload(){

}
function setup(){
canvas  = createCanvas(800,800);
canvas.position(43,310);
video=createCapture(VIDEO);
video.size(800,800);
video.hide();
}
function draw(){
image(video,0,0,800,800);

}