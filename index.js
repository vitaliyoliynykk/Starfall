const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

const width = document.body.clientWidth;
const height = document.body.clientHeight;

canvas.width = width;
canvas.height = height;

const stars = [];
const numberOfStars = 120;
let totalNumber = numberOfStars;

const randomIntFromInterval = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class Star {
    constructor(posX, posY, speed, id) {
        this.posX = posX;
        this.posY = posY;
        this.speed = speed
        this.id = id;
    }

    move() {
        this.posX += 1 * this.speed;
        this.posY += 1 * this.speed;
    }
}



for(let i=0; i < numberOfStars; i++) {
    const side = randomIntFromInterval(0, 1);
    const id = '_' + Math.random().toString(36).substr(2, 9);
    console.log(id);
    if(side === 0) {
        stars.push(new Star(0, randomIntFromInterval(0, width), Math.random() * 5, id));
    }
    if(side === 1) {
        stars.push(new Star(randomIntFromInterval(0, height), 0, Math.random() * 5, id));
    }
    
}

setInterval(() => {
    stars.forEach((star) => {
        star.move();
        if(star.posX >= height || star.posY >= width) {
            // const id = stars.map((star) => star.id).indexOf(star.id);
            // console.log(id);
        }
    })
}, 50);


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