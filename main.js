function preload() { }

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
}

Webcam.set({
  width: 640,
  height: 480,
  image_format: "png",
  png_quality: 90,
});

function draw() { 
  image(video, 0, 0, 640, 480);
}

function take_snapshot() {
  save("me.png");
}