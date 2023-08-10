class Player { 
    constructor(){
        this.positionX = 50;
        this.positionY = 0;
        this.width = 10; 
        this.height = 20;
        this.domElement = null;
        this.createDomElement();




    }
    createDomElement(){
        this.domElement = document.createElement('div');
        this.domElement.id = 'player';
        this.domElement.style.width = this.width+ "vw";
        this.domElement.style.height = this.height+ "vh";
        this.domElement.style.left = this.positionX+ "vw";
        this.domElement.style.bottom = this.positionY+ "vh";

        //this.domElement.setAttribute('id','player')
        const parentElm = document.getElementById('board');
        parentElm.appendChild(this.domElement);
    }


    moveLeft(){
        if(this.positionX>0) {
            this.positionX--;
            this.domElement.style.left = this.positionX+'vw';
        }
        
    }
    moveRight(){
        if(this.positionX<100-this.width) {
            this.positionX++;
            this.domElement.style.left = this.positionX+'vw';
        }
    }
}

const player = new Player(); 
document.addEventListener('keydown', (event)=> {
    if(event.key === "ArrowLeft") {
        player.moveLeft();

    }
    else if (event.key ==="ArrowRight"){
        player.moveRight();

    }
})


class Obstacle {
    constructor(){
        this.positionX = Math.random() * (80 - 0) + 0;
        this.positionY = 100;
        this.width = 5; 
        this.height = 15;
        this.domElement = null;

        this.createDomElement();
    }
    moveDown(){
            this.positionY--;
            this.domElement.style.bottom = this.positionY + "vh"
    }
    createDomElement(){
        this.domElement = document.createElement('div');
        this.domElement.className = 'obstacle';
        this.domElement.style.width = this.width+ "vw";
        this.domElement.style.height = this.height+ "vh";
        this.domElement.style.left = this.positionX+ "vw";
        this.domElement.style.bottom = this.positionY+ "vh";

        //this.domElement.setAttribute('id','player')
        const parentElm = document.getElementById('board');
        parentElm.appendChild(this.domElement);
    }

}



const obstaclesArr = [];

//create obstacles

setInterval(() => {
    let newObstacle = new Obstacle;
    //newObstacle.moveDown();
    obstaclesArr.push(newObstacle)
}, 10000)

// move all obstacles 
setInterval(() => {
    obstaclesArr.forEach((element) => {
        element.moveDown();
    })
}, 20);




