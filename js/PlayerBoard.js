class PlayerArcher {
    constructor(x, y, width, height) {
      const options = {
        isStatic: true
      };
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/board.png");
  
      World.add(world, this.body);
  
      Matter.Body.setAngle(this.body,90); 
    }
}