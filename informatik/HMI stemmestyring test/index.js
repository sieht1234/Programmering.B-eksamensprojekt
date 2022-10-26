
  // Global variable to store the classifier
let classifier;

// Label
let label = 'listening...';

// Teachable Machine model URL:
let soundModel = 'https://teachablemachine.withgoogle.com/models/vDIVbvciB/'

let confidence = 0

function preload() {
  // Load the model
  classifier = ml5.soundClassifier(soundModel + 'model.json');
}
//ifoehd


function getValue()
{
    var myWindow = window.open("http://www.safari.com", "_blank")
}
function getValueClose()
{
    var myWindowClose = window.close("http://www.safari.com", "_self")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Start classifying
  // The sound model will continuously listen to the microphone
  classifier.classify(gotResult);
  
}

function draw() {
  background(0);
  // Draw the label in the canvas
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(label, width / 2, height / 2);
  
}


// The model recognizing a sound will trigger this event
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  console.log(results[0]);
  label = results[0].label;
  confidence = results[0].confidence
  if (label == 'åben' && confidence > 0.90){
    getValue()
    }
    if(label == 'luk' && confidence > 0.90){
        getValueClose()
    }
}

