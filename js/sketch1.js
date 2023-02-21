let theta = 0.4;
let v = 0;
let t = 0;
const dt = 1 / 60;  //時間步進尺寸
let trailX = [];
let trailY = [];
let lSlider;
let sSlider;

function setup() {
  createCanvas(windowWidth*0.987, windowHeight*0.983);      //背景
  let h = windowHeight;
  frameRate(144);       //禎數

  lSlider =createSlider(0.1 * h, 0.9 * h, 0.5 * h, 0.05 * h);   //長度滑桿
  lSlider.position(85, windowHeight*0.88-10);   //長度滑桿位置

  sSlider = createSlider(5, 25, 15, 1);     //尺寸滑桿
  sSlider.position(85, windowHeight*0.92-10);   //尺寸滑桿位置

  mSlider = createSlider(0, 1, 0.5, 0.1);   //重量滑桿
  mSlider.position(85, windowHeight*0.96-10);   //重量滑桿位置
}

function draw() {
  background("#f8f1f1");    //背景顏色

  let length = lSlider.value(); //讀值
  let size = sSlider.value();   //讀值
  t = t + 1;    //疊代!?
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
  circle(x, y, 3* size);
  pop();

  push();
  fill(163, 210, 202, 20);
  noStroke();
  for (let i = 0; i < trailX.length; i++) {
    circle(trailX[i], trailY[i], 3 * size)
  }
  pop();

  textSize(24);
  text('length',10, windowHeight*0.88);
  text('size',10, windowHeight*0.92);
  text('mass',10, windowHeight*0.96);
  //text('這是一個單擺模型，作為渾沌擺的試做測試',10,windowHeight*0.96)
}