// option One 
/*<button onclick="document.body.style.backgroundColor = 'red'">Red</button>*/

// option Two 
function colorBlue (){
  document.body.style.backgroundColor = 'blue';
}

// option Three 
let makeGreen = document.getElementById('make-green');
makeGreen.onclick = makeGreenColor;

function makeGreenColor (){
  document.body.style.backgroundColor = 'green';
}

// option Three Another
let makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurpleColor(){
  document.body.style.backgroundColor = 'purple';
}

// option Four
let makePink = document.getElementById('make-pink');
makePink.addEventListener('click', makePinkColor);
function makePinkColor (){
  document.body.style.backgroundColor = 'pink';
}

// option Four another
let makeYellow = document.getElementById('make-yellow');
makeYellow.addEventListener('click', function makeYellowColor(){
  document.body.style.backgroundColor = 'yellow';
})

// option Four Final 
document.getElementById('make-goldenrod').addEventListener('click', function(){
  document.body.style.backgroundColor = 'goldenrod';
})