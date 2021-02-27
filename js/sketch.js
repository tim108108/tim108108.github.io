let theta = 0.5;
let v = 0;
let t = 0;
const dt = 1 / 40;
let trailX = [];
let trailY = [];
let lSlider;
let mSlider;

function setup() {
  createCanvas(windowWidth*0.99, windowHeight*0.98);
  let h = windowHeight;
  frameRate(144);

  lSlider =createSlider(0.1 * h, 0.9 * h, 0.5 * h, 0.05 * h);
  lSlider.position(85, windowHeight*0.88-10);

  mSlider = createSlider(5, 25, 15, 1);
  mSlider.position(85, windowHeight*0.92-10);
}

function draw() {
  background("#f8f1f1");

  let length = lSlider.value();
  let mass = mSlider.value();
  t = t + 1;
  let a = -1 * 980/length * sin(theta);
  v = v + (a * dt);
  theta = theta + (v * dt);
  let x = (0.5 * windowWidth) + (length * sin(theta));
  let y = length * cos(theta);

  if (t % 1 === 0) {
    if (trailX.length > 31) {
      trailX.splice(0, 1);
      trailY.splice(0, 1);
    }
    trailX.push(x);
    trailY.push(y)
  }

  push();
  stroke('#eb5e0b');
  strokeWeight(4);
  line(windowWidth / 2, 0, x, y)
  pop();

  push();
  stroke('#eb5e0b');
  strokeWeight(4);
  line(x, y,x+100,y+100)
  pop();

  push();
  fill("#5eaaa8");
  noStroke();
  circle(x, y, 3* mass);
  pop();

  push();
  fill(163, 210, 202, 20);
  noStroke();
  for (let i = 0; i < trailX.length; i++) {
    circle(trailX[i], trailY[i], 3 * mass)
  }
  pop();

  textSize(24);
  text('length',10, windowHeight*0.88);
  text('mass',10, windowHeight*0.92);
  text('這是一個單擺模型，作為渾沌擺的試做測試',10,windowHeight*0.96)
}