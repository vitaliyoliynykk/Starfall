const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

const width = document.body.clientWidth;
const height = document.body.clientHeight;

canvas.width = width;
canvas.height = height;

const stars = [];
const numberOfStars = 200;
let totalNumber = numberOfStars;

const randomIntFromInterval = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const createStarParams = () => {
    const side = randomIntFromInterval(0, 1);
    let star = null;

    if(side === 0) star = {posX: 0, posY: randomIntFromInterval(0, height), speed: Math.random() * 5}
    if(side === 1) star = {posX: randomIntFromInterval(0, width), posY: 0, speed: Math.random() * 5}

    return star
}

const initStars = () => {
    for(let i=0; i < numberOfStars; i++) {
        const starParams = createStarParams()
        stars.push(new Star(starParams.posX, starParams.posY, starParams.speed));
    }
}


const resetPositionIfCrossTheBorder = (star) => {
    if(star.posX >= width) {
        const starParams = createStarParams();
        star.setPos(starParams.posX, starParams.posY,  starParams.speed);
    } if(star.posY >= height) {
        const starParams = createStarParams();
        star.setPos(starParams.posX, starParams.posY,  starParams.speed);
    }
}

const moveStars = () => {
    setInterval(() => {
        stars.forEach((star, index) => {
            star.move();
            resetPositionIfCrossTheBorder(star);
        })
    }, 50);
}

initStars();
moveStars();

const draw = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,width, height);

    
    stars.forEach((star) => {
        ctx.fillStyle = 'white';
        ctx.beginPath()
        ctx.arc(star.posX, star.posY, 1, 0, 2 * Math.PI);
        ctx.closePath()
        ctx.fill()
    })
    
    window.requestAnimationFrame(draw)
}

window.requestAnimationFrame(draw);