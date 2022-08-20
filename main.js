mouthx = 0;
mouthy = 0;

function preload()
{
    moustache_mouth = loadImage("https://pngimg.com/image/55078");    
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}

function modelloaded()
{
    console.log("posenet has started");
}

function gotposes(results)
{
   if(results.length>0)
   {
    console.log(results);
    mouthx = results[0].pose.mouth.x-25;
    mouthy = results[0].pose.mouth.y-25;
   }
}

function draw()
{
    image(video,0,0,300,300);
    image(moustache_mouth,mouthx,mouthy,60,60);    
}

function take_snapshot()
{
    save("Moustache Image.png");
}
