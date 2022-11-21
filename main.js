function setup(){
    video=CreateCaptrue(VIDEO);
    video.size(550,500);

    canvas=createcanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose'.gotpose);
}
function modelLoaded(){
    console.log('poseNet is Initialized!');
}
function  draw(){
    background('#969A97');
}
function gotpose(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}