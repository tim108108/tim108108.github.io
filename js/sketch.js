let angle;
let angleV = 0;
let angleA = 0;
let angleV2 = 0;
let angleA2 = 0;
let bob;
let len;
let len2;
let origin;
let gravity = 0.98;
function setup() {
    createCanvas(windowWidth*0.987, windowHeight*0.983);    //背景大小
    origin = createVector(windowWidth/2, 0);    //固定點

    angle = PI / 4;
    bob = createVector();
    len = 500;

    angle2 = PI / 4;
    bob2 = createVector();
    len2 = 250;
}
function draw() {
    background("#f8f1f1");      //背景顏色

    let force = gravity * sin(angle);
    angleA = (-1 * force) / len;
    angleV += angleA;
    angle += angleV;

    bob.x = len * sin(angle) + origin.x;
    bob.y = len * cos(angle) + origin.y;

    strokeWeight(4);
    stroke('#eb5e0b');
    line(origin.x, origin.y, bob.x, bob.y);
    fill("#5eaaa8");
    noStroke();
    circle(bob.x, bob.y, 64);
//=================================================
    let force2 = gravity * sin(angle2-angle);
    angleA2 = (-1 * (force2)) / len2;
    angleV2 += angleA2;
    angle2 += angleV2;

    bob2.x = len2 * sin(angle2) + bob.x;
    bob2.y = len2 * cos(angle2) + bob.y;

    strokeWeight(4);
    stroke('#eb5e0b');
    line(bob.x, bob.y, bob2.x, bob2.y);
    fill("#5eaaa8");
    noStroke();
    circle(bob2.x, bob2.y, 64);
//    console.log(windowWidth);
//    console.log(PI);
}
