var sizeOfGraph = 50
var userFunction = "x*x"

function setup() {
  createCanvas(window.innerHeight,
               window.innerHeight)
  angleMode(DEGREES)
}
function draw() {
  background(0)
  fill(255,255,255)
  //center 0,0
  translate(width/2, height/2)
  //flip vertically
  scale(1.0,-1.0)
  
  stroke(255,255,255)
  strokeWeight(1)
  //x-axis
  line(-width/2,0,
        width/2,0)
  //y-axis
  line(0,-height/2,
        0,height/2)
  //x-axis bumps
  for (var i = -width/2; i < width/2; i++) {
    if (parseInt(i/sizeOfGraph) === i/sizeOfGraph) {
      line(i, 3, i, -3)
      console.log(i)
    }
  }
  //y-axis bumps
  for (var i = -height/2; i < height/2; i++) {
    if (parseInt(i/sizeOfGraph) === i/sizeOfGraph) {
      line(3, i, -3, i)
      console.log(i)
    }
  }
  
  //function
  graphFunction(f, [8, 147, 189]) //rgb(8, 147, 189)
}

function graphFunction(f, color) {
  stroke(color)
  strokeWeight(2)
  for (var i = -width/2; i < width/2; i+=0.1) {
    output = f(i/sizeOfGraph) * sizeOfGraph
    point(i, output)
  }
}

function f(x) {
  return eval(userFunction)
}

function updateF() {
  userFunction = document.getElementById('inputF').value
}

function updateS() {
  sizeOfGraph = parseFloat(document.getElementById('inputS').value)
  console.log(sizeOfGraph)
}