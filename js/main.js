const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext(`2d`);

const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;

canvas.addEventListener(`mousemove`, (e) => {
    ctx.beginPath();
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.moveTo(canvasWidth / 2, canvasHeight / 2);
    ctx.lineTo(e.x, e.y);
    ctx.stroke();
});