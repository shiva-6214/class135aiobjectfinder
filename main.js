video = "";

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function draw() {
    image(video, 0, 0, 480, 380);
}