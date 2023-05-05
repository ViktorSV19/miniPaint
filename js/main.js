const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext(`2d`);

const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;

// const startPos = [canvasWidth / 2, canvasHeight / 2];
let figure = [[0, 0], [100, 100], [50, 100], [100, 200], [200, 100]];

// canvas.addEventListener(`click`, (e) => {
//     if (figure.length === 0) {
//         let startPos = [e.x, e.y];
//         figure.push(startPos);
//     }
//     figure.push([e.x, e.y]);
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//     drawFigure(figure);
// });

// canvas.addEventListener(`click`, (e) => {
//     if (figure.length === 0) {
//         let startPos = [e.x, e.y];
//         figure.push(startPos);
//     }
//     figure.push([e.x, e.y]);
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//     drawFigure(figure);
// });

canvas.addEventListener(`mousemove`, (e) => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawFigure(figure);
    let x = e.offsetX;
    let y = e.offsetY;
    let startPos = [figure[lastIndex(figure)][0], figure[lastIndex(figure)][1]];
    ctx.beginPath();
    ctx.moveTo(startPos[0], startPos[1]);
    ctx.lineTo(x, y);
    ctx.stroke();
    canvas.onclick = function () {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        drawFigure(figure);
        figure.push([x, y]);
        startPos = [figure[lastIndex(figure)][0], figure[lastIndex(figure)][1]];
    };
});

function lastIndex(array) {
    return array.length - 1;
}

function drawFigure(figure) {
    let oldX = figure[0][0]; // 0
    let oldY = figure[0][1]; // 0
    let newX = figure[1][0]; // 100
    let newY = figure[1][1]; // 100
    let coordinate = 0;
    let figureNumber = 2;
    for (let i = 0; i < figure.length - 1; i++) {
        ctx.beginPath();
        ctx.moveTo(oldX, oldY);
        ctx.lineTo(newX, newY);
        ctx.stroke();
        oldX = newX;
        oldY = newY;
        // console.log(`oldX: ${oldX}, oldY: ${oldY}, newX: ${newX}, newY: ${newY}`);
        if (figureNumber === figure.length)
            return;
        newX = figure[figureNumber][coordinate];
        coordinate++;
        newY = figure[figureNumber][coordinate];
        coordinate = 0;
        figureNumber++;
    }
}
// canvas.addEventListener(`mousemove`, (e) => {
//     ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//     let X = e.offsetX;
//     let Y = e.offsetY;
//     ctx.beginPath();
//     ctx.moveTo(startPos[0], startPos[1]);
//     ctx.lineTo(X, Y);
//     ctx.stroke();
    // canvas.onclick = function () {
    //     figure.push([X, Y]);
    //     console.log(figure);
    // };
// });