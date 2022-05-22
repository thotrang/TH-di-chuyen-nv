let ninja = new Ninja('TH-nv-di-chuyen\game\img\down1.png', 20, 20, 100);
function start() {
    document.getElementById('myNinja').innerHTML = ninja.getNinja();
}
function move(mov) {
    switch (mov.keyCode) {
        case 37:
            alert("sang trái")
            ninja.moveLeft();
            break;
        case 38:
            ninja.moveUp();
            break;
        case 39:
            ninja.moveRight();
            break;
        case 40:
            ninja.moveDown();
            break;
    }
}

// function start(){
//     if(ninja.left < window.innerWidth - ninja.size){
//       ninja.moveRight();
//     }
//     document.getElementById('myNinja').innerHTML = ninja.getNinja();
//     setTimeout(start, 500)
//   }
