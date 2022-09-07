let width = window.innerWidth
let height = window.innerHeight

let body = document.querySelector('body')

let line = document.querySelector('section.header')
let hover = document.querySelector('a')

let title = document.querySelector('section.header div.title')
let subtitle = document.querySelector('section.header div.description')

let rect = title.getBoundingClientRect()
let rectHeight = rect.bottom + rect.top

// let rect2 = title.getBoundingClientRect()
let rightSide = rect.right; // rect2.right

let hand


//////////////////////////////////////////////
// before sketch starts, hand img is preloaded
function preload() {
  hand = loadImage("assets/images/hand4.png");
}


//////////////////////////////////////////////
// setup is run once before draw() is called
function setup() {
  createCanvas(width, height);
  body.style.cursor = 'none';
  hover.style.cursor = 'none';
  smooth();
}


//////////////////////////////////////////////
// draw runs 60 times a second, until it's stopped
function draw() {
  
  clear()

  noFill();
  strokeWeight(4);
  beginShape();
    vertex(rightSide + 32, rectHeight / 2); // Entry point, in relation to title tag - https://p5js.org/reference/#/p5/vertex
    quadraticVertex(width / 3 * 2, rectHeight / 2, mouseX, mouseY); // curvature + control point - https://p5js.org/reference/#/p5/quadraticVertex
  endShape();

  // the rest below is rotation of the hand cursor
  let diffX = (width / 3 * 2) - mouseX;
  let diffY = mouseY - 20;

  angle = Math.atan2(diffY, diffX) // calc cursor angle - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2
  //console.log(an);

  // hand.style.transform = `translate(${mouseX}px,${mouseY}px)`
  push()
    angleMode(RADIANS)
    translate(mouseX, mouseY)
    rotate(-angle + radians(90));
    image(hand, -33, -25, 66, 103)
  pop()
}