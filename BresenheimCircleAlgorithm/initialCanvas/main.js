const canvas = document.getElementById("canvas");

const twoDimensionalDrawingContext = canvas.getContext("2d");
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// twoDimensionalDrawingContext.fillRect(0,0,width, height);

const PI = 3.1415926535897932384626433;
const threeSixtyAsRadian = 2 * PI;

const convertToDegreesFromRadians = (radian) => {
    return radian * 180 / PI;
};

const convertToRadiansFromDegrees = (degrees) => {
    return degrees * PI / 180;
};

const centerX = width / 2,
    centerY = height / 2,
    radius = 200,
    speed = .01;

let x, y, angle = 0;


function renderCircle() {
    twoDimensionalDrawingContext.clearRect(0, 0, width, height);
    x = centerX + Math.cos(angle) * radius;
    y = centerY + Math.sin(angle) * radius;
    twoDimensionalDrawingContext.beginPath();
    twoDimensionalDrawingContext.arc(x, y, 10, 0, threeSixtyAsRadian, false);
    twoDimensionalDrawingContext.fill();

    angle += speed;
    requestAnimationFrame(renderCircle);
};

function drawCircle(thickness = 10, localNum = 10) {
    const numObjects = localNum,
        slice = PI * 2 / numObjects;

    for (let i = 0; i < numObjects; i++) {
        angle = i * slice;
        x = centerX + Math.cos(angle) * radius;
        y = centerY + Math.sin(angle) * radius;
        twoDimensionalDrawingContext.beginPath();
        twoDimensionalDrawingContext.arc(x, y, thickness, 0, threeSixtyAsRadian, false);
        twoDimensionalDrawingContext.fill();
    }
};

function renderEllipticCurve() {
    const radiusX = 200;
    const radiusY = 350;
    twoDimensionalDrawingContext.clearRect(0, 0, width, height);
    x = centerX + Math.cos(angle) * radiusX;
    y = centerY + Math.sin(angle) * radiusY;
    twoDimensionalDrawingContext.beginPath();
    twoDimensionalDrawingContext.arc(x, y, 10, 0, threeSixtyAsRadian, false);
    twoDimensionalDrawingContext.fill();

    angle += speed;
    requestAnimationFrame(renderEllipticCurve);
}

let xAngle = 0,
    yAngle = 0,
    xSpeed = .1,
    ySpeed = .131;

function renderLissajousCurve() {
    const radiusX = 200;
    const radiusY = 350;
    twoDimensionalDrawingContext.clearRect(0, 0, width, height);
    x = centerX + Math.cos(xAngle) * radiusX;
    y = centerY + Math.sin(yAngle) * radiusY;
    twoDimensionalDrawingContext.beginPath();
    twoDimensionalDrawingContext.arc(x, y, 10, 0, threeSixtyAsRadian, false);
    twoDimensionalDrawingContext.fill();

    xAngle += xSpeed;
    yAngle += ySpeed;
    requestAnimationFrame(renderLissajousCurve);
}

drawCircle(2, 60);
drawCircle(5, 30);
drawCircle(30, 5);
drawCircle(60, 2);
