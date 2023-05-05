const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext(`2d`);

const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;

let figure = [];

let canvasDownload = document.getElementById(`canvasDownload`);
let pngDataURL;

canvas.onmousemove = function (e) {
    const x = e.offsetX;
    const y = e.offsetY;
    let startPos;

    if (figure.length >= 2) {
        startPos = [figure[lastIndex(figure)][0], figure[lastIndex(figure)][1]];
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        drawFigure(figure);
        ctx.beginPath();
        ctx.moveTo(startPos[0], startPos[1]);
        ctx.lineTo(x, y);
        ctx.stroke();
    } else if (figure.length === 1) {
        startPos = [figure[lastIndex(figure)][0], figure[lastIndex(figure)][1]];
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.beginPath();
        ctx.moveTo(startPos[0], startPos[1]);
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    canvas.onclick = function () {
        figure.push([x, y]);
        if (figure.length >= 2) {
            // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.beginPath();
            ctx.fillStyle = `#fff491`;
            ctx.rect(0, 0, canvasWidth, canvasHeight);
            ctx.fill();
            drawFigure(figure);
            startPos = [figure[lastIndex(figure)][0], figure[lastIndex(figure)][1]];
        }
        pngDataURL = canvas.toDataURL(`image/png`);
        canvasDownload.href = pngDataURL;
    };

    canvas.oncontextmenu = function () {
        canvas.onmousemove = null;
        return false;
    };
};

document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyR') {
        figure.length = 0;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    }
});

// canvas.addEventListener(`mousemove`, (e) => {
//     const x = e.offsetX;
//     const y = e.offsetY;
//     let startPos;

//     if (figure.length >= 2) {
//         startPos = [figure[lastIndex(figure)][0], figure[lastIndex(figure)][1]];
//         ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//         drawFigure(figure);
//         ctx.beginPath();
//         ctx.moveTo(startPos[0], startPos[1]);
//         ctx.lineTo(x, y);
//         ctx.stroke();
//     } else if (figure.length === 1) {
//         startPos = [figure[lastIndex(figure)][0], figure[lastIndex(figure)][1]];
//         ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//         ctx.beginPath();
//         ctx.moveTo(startPos[0], startPos[1]);
//         ctx.lineTo(x, y);
//         ctx.stroke();
//     }

//     canvas.onclick = function () {
//         figure.push([x, y]);
//         if (figure.length >= 2) {
//             ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//             drawFigure(figure);
//             startPos = [figure[lastIndex(figure)][0], figure[lastIndex(figure)][1]];
//         }
//     };

//     canvas.oncontextmenu = function () {
//         canvas.onmousemove = null;
//         return false;
//     };
// });

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
        if (figureNumber === figure.length)
            return;
        newX = figure[figureNumber][coordinate];
        coordinate++;
        newY = figure[figureNumber][coordinate];
        coordinate = 0;
        figureNumber++;
    }
}