var notes = [ 60, 62, 64, 65, 67, 69, 71];
var osc;
var slider;

function setup() {
  createCanvas(720, 400);
  
  osc = new p5.TriOsc();
  osc.start();
  osc.amp(0);

  slider = createSlider (0, 1, 0.5, 0.01);
 

}

function playNote(note, duration) {
  osc.freq(midiToFreq(note));
  osc.fade(0.5,0.2);

  if (duration) {
    setTimeout(function() {
      osc.fade(0,0.2);
    }, duration-50);
  }
}

function draw() {

  
  var w = width / notes.length;

  
  for (var i = 0; i < notes.length; i++) {
    var x = i * w;

    if (mouseX > x && mouseX < x + w && mouseY < height) {

      if (mouseIsPressed) {
        fill(100,255,200);

      } else {
        fill(127);
      }
    } else {
      fill(200);
    }
  rect(x, 0, w-1, height-1);
  


   
  }

}
function mousePressed() {
  var key = floor(map(mouseX, 0, width, 0, notes.length));
  playNote(notes[key]);
}

function mouseReleased() {
  osc.fade(0,0.5);
}

function touchstarted() {
  text(touches.length, 200, 200);
  text(touches[0].x, 200, 220);
  text(touches[0].y, 200, 240);
  text(touches[1].x, 200, 260);
  text(touches[1].y, 200, 280);
}

