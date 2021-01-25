import {height, threeSixtyAsRadian, twoDimensionalDrawingContext, width} from "./main.js";

const drawRandomLines = () => {
    for (let i = 0; i < 100; i++) {
        twoDimensionalDrawingContext.beginPath();
        twoDimensionalDrawingContext.moveTo(Math.random() * width, Math.random() * height);
        twoDimensionalDrawingContext.lineTo(Math.random() * width, Math.random() * height);
        twoDimensionalDrawingContext.stroke();
    }
};
// drawRandomLines();

const importantRadians = () => {
    console.log(`1 Radian = ${convertToDegreesFromRadians(1)}`);
    console.log(`2 Radian = ${convertToDegreesFromRadians(2)}`);
    console.log(`3 Radian = ${convertToDegreesFromRadians(3)}`);
    console.log(`4 Radian = ${convertToDegreesFromRadians(4)}`);
    console.log(`5 Radian = ${convertToDegreesFromRadians(5)}`);
    console.log(`6 Radian = ${convertToDegreesFromRadians(6)}`);
    console.log(`2 * PI Radians = ${convertToDegreesFromRadians(threeSixtyAsRadian)}`)
}
// importantRadians();

const importantDegrees = () => {
    console.log(`45 Degrees = ${convertToRadiansFromDegrees(45)}`);
    console.log(`90 Degrees = ${convertToRadiansFromDegrees(90)}`);
    console.log(`135 Degrees = ${convertToRadiansFromDegrees(135)}`);
    console.log(`180 Degrees = ${convertToRadiansFromDegrees(180)}`);
    console.log(`225 Degrees = ${convertToRadiansFromDegrees(225)}`);
    console.log(`270 Degrees = ${convertToRadiansFromDegrees(270)}`);
    console.log(`315 Degrees = ${convertToRadiansFromDegrees(315)}`);
    console.log(`360 Degrees = ${convertToRadiansFromDegrees(360)}`);
}
// importantDegrees();

const showSine = () => {
    // shift to middle of screen
    twoDimensionalDrawingContext.translate(0, height / 2);
    // flip sine wave due to reverse cartesian coordinate mapping
    twoDimensionalDrawingContext.scale(1, -1);

    for (let angle = 0; angle < threeSixtyAsRadian; angle += .01) {
        const spacing = 150;
        const lineThickness = 2;
        let x = angle * spacing,
            y = Math.sin(angle) * spacing;

        twoDimensionalDrawingContext.fillRect(x, y, lineThickness, lineThickness);
    }
};
// showSine();

const showCosine = () => {
    // shift to middle of screen
    twoDimensionalDrawingContext.translate(0, height / 2);
    // flip sine wave due to reverse cartesian coordinate mapping
    twoDimensionalDrawingContext.scale(1, -1);

    for (let angle = 0; angle < threeSixtyAsRadian; angle += .01) {
        const spacing = 150;
        const lineThickness = 2;
        let x = angle * spacing,
            y = Math.cos(angle) * spacing;

        twoDimensionalDrawingContext.fillRect(x, y, lineThickness, lineThickness);
    }
};
// showCosine();

const TrigValues = {
    "SINE": 1,
    "COS": 2,
    "TAN": 3
}

const showTrig = (trigValue) => {
    // shift to middle of screen
    twoDimensionalDrawingContext.translate(0, height / 2);
    // flip sine wave due to reverse cartesian coordinate mapping
    twoDimensionalDrawingContext.scale(1, -1);

    for (let angle = 0; angle < threeSixtyAsRadian; angle += .01) {
        const spacing = 150;
        const lineThickness = 2;
        const x = angle * spacing;
        let y = 0;
        switch (trigValue) {
            case 1:
                y = Math.sin(angle);
                break;
            case 2:
                y = Math.cos(angle);
                break;
            case 3:
                y = Math.tan(angle);
                break;
            default:
                y = Math.sin(angle);
        }
        y *= spacing;

        twoDimensionalDrawingContext.fillRect(x, y, lineThickness, lineThickness);
    }
};
// showTrig(TrigValues.SINE);
// showTrig(TrigValues.COS);
// showTrig(TrigValues.TAN);

const sineYaxis = () => {
    const centerY = height * .5,
        centerX = width * .5,
        offset = height * .4,
        speed = 0.1;
    let angle = 0;
    render();

    function render() {
        const y = centerY + Math.sin(angle) * offset;

        twoDimensionalDrawingContext.clearRect(0, 0, width, height);
        twoDimensionalDrawingContext.beginPath();
        twoDimensionalDrawingContext.arc(centerX, y, 50, 0, threeSixtyAsRadian, false);
        twoDimensionalDrawingContext.fill();
        angle += speed;
        console.log(`angle ${angle} & y = ${y}`);
        requestAnimationFrame(render);
    }
}
// sineYaxis();

const sineAlpha = () => {
    const centerY = height * .5,
        centerX = width * .5,
        baseAlpha = .5,
        offset = .5,
        speed = 0.1;
    let angle = 0;
    render();

    function render() {
        const alpha = baseAlpha + Math.cos(angle) * offset;

        twoDimensionalDrawingContext.fillStyle = "rgba(0,0,0, " + alpha + ")";
        twoDimensionalDrawingContext.clearRect(0, 0, width, height);
        twoDimensionalDrawingContext.beginPath();
        twoDimensionalDrawingContext.arc(centerX, centerY, 100, 0, threeSixtyAsRadian, false);
        twoDimensionalDrawingContext.fill();
        angle += speed;
        requestAnimationFrame(render);
    }
}
// sineAlpha();

const sineRadius = () => {
    const centerY = height * .5,
        centerX = width * .5,
        maxRadius = 127.5,
        offset = 30,
        speed = .1;
    let angle = 0;
    render();


    function render() {
        // using cosine function as we start from the angle 0 and that equals 1,
        // hence we have start off at full size
        // const radius = maxRadius + Math.cos(angle) * offset;
        const radius1 = maxRadius + Math.sin(angle) * offset;

        // goes from 0 - 255 :)
        const radius = maxRadius + Math.cos(angle) * maxRadius;

        // for sliders to change the colour
        let red = 1;
        let green = 0.2;
        let blue = .5;

        red *= radius;
        green *= radius;
        blue *= radius;

        twoDimensionalDrawingContext.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
        twoDimensionalDrawingContext.clearRect(0, 0, width, height);
        twoDimensionalDrawingContext.beginPath();
        twoDimensionalDrawingContext.arc(centerX, centerY, radius, 0, threeSixtyAsRadian, false);
        twoDimensionalDrawingContext.arc(centerX - radius1 * 2.4, centerY, radius1, 0, threeSixtyAsRadian, false);
        twoDimensionalDrawingContext.arc(centerX + radius1 * 2.4, centerY, radius1, 0, threeSixtyAsRadian, false);
        twoDimensionalDrawingContext.fill();
        angle += speed;
        requestAnimationFrame(render);
    }
}
sineRadius();

