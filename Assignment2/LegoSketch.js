// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/EnlSAQi7N/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);

  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(20);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  // Pick an emoji, the "default" is train
  let emoji = "";
   if (label == "Nothing") {
    emoji = "";
  } else if (label == "Colin") {
    emoji = "";
  } else if (label == "Four Brick") {
    emoji = "🧱"
  } else if (label == "Six Brick") {
    emoji = "🧱"
  } else if (label == "Eight Brick") {
    emoji = "🧱"
  } else if (label == "Lego Pieces") {
    emoji = "🧱"
  } else if (label == "Colin's Lego Pieces") {
    emoji = "😊🧱"
  } else if (label == "Building") {
    emoji = "🚧"
  } else if (label == "Building More") {
    emoji = "⚒️ 🦺 "
  }


  // Draw the emoji
  textSize(100);
  text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}