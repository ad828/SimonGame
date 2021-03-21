/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
//global const
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//global variables
var strikes;
var clueHoldTime = 1000;
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var newpattern = [];


function startGame(){
    //initialize game variables
  strikes = 3;
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  randomizePattern();
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}
const freqMap = {
  1: 230,
  2: 340,
  3: 450,
  4: 560,
  5: 670,
  6: 780
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + newpattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,newpattern[i]) // set a timeout to play that clue
    clueHoldTime = clueHoldTime - progress*3;
    delay += clueHoldTime;
    delay += cluePauseTime / progress+1;
  }
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You Win!");
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if(newpattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == newpattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    strikes--;
    if (strikes == 0){
      loseGame();
    }
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))+1;
}
function randomizePattern(){
var j;
for (j = 0; j < pattern.length; j++) {
newpattern[j] = getRandomInt(6);
}
  console.log(newpattern);
}