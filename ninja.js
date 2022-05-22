class Ninja {
    image;
    top;
    left;
    size;
    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }
    getNinja() {
        let text = `<img src="${this.image}" 
        height="${this.size}"     width="${this.size}" 
        style="top:${this.top}px; left:${this.left}px; position: absolute;" >`
        return text;
    }
    setNinja(image, top, left){
        this.image = image;
        this.top = top;
        this.left = left;
    }
    moveUp() {
        this.top += 5;
        console.log('ok: ' + this.top);
    }
    moveDown() {
        this.top -= 5;
        console.log('ok: ' + this.top);
    }
    moveRight() {
        this.left += 5;
        console.log('ok: ' + this.left);
    }
    moveLeft() {
        this.left -= 5;
        console.log('ok: ' + this.left);
    }
}