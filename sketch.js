var wave;
var playing = false;
var button;

function setup() {
  //createCanvas(displayWidth, displayHeight);
  createCanvas(720, 256);
  wave = new p5.Oscillator();
  wave.setType('sine');
  // wave.start();
  wave.freq(440);
  wave.amp(0);

  button = createButton('play/pause');
  button.mousePressed(toggle);

}

function draw() {
}

function toggle(){
  if(!playing){
    wave.start();
    wave.amp(0.5,1);
    playing=true;
  }else{
    wave.amp(0,1);
    playing=false;
  }
}

