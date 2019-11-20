class Star {
    constructor(posX, posY, speed) {
        this.posX = posX;
        this.posY = posY;
        this.speed = speed
    }

    move() {
        this.posX += 1 * this.speed;
        this.posY += 1 * this.speed;
    }

    setPos(x, y) {
        this.posX = x;
        this.posY = y;

    }
}