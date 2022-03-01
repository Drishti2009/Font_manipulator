function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 70);

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotPoses)
}

function modelloaded(){
    console.log("PoseNet is initialised");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background("#9fa19f");
    textSize(difference);
    fill("#0dff00")
    text('Drishti', 40, 200);
}