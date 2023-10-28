function setup(){
video=createCapture(VIDEO)
video.size(500,500)
canvas=createCanvas(550,550)
canvas.position(560,150)
posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}
nose_X=0
nose_Y=0
leftwrist_x=0
rightwrist_x=0
difference=0
function draw(){
background("darkgrey")
fill("red")
textSize(difference)
text("PETER",nose_X,nose_Y)
}
function modelloaded(){
    console.log("modelisloaded")
}
function gotposes(results){
if (results.length>0) {
    console.log(results)
    nose_X=results[0].pose.nose.x
    nose_Y=results[0].pose.nose.y
    leftwrist_x=results[0].pose.leftWrist.x
    rightwrist_x=results[0].pose.rightWrist.x
    difference=leftwrist_x-rightwrist_x
}
}