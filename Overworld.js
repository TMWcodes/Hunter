class Overworld {
 constructor(config) {
   this.element = config.element;
   this.canvas = this.element.querySelector(".game-canvas");
   this.ctx = this.canvas.getContext("2d");
   this.map = null;
 }

 startGameloop() {
   const step = () => {
    

    //clears the canvas
    this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    // draw lower layer
    this.map.drawLowerImage(this.ctx);

    //draw game objects
    Object.values(this.map.gameObjects).forEach(object => {
      object.update({
        arrow: this.directionInput.direction
      })
       object.sprite.draw(this.ctx);
    })
    //draw upper layer
    this.map.drawUpperImage(this.ctx);

    
     requestAnimationFrame(() => {
      step();
     })
   }
   step();
 }

 init() {
  this.map = new OverworldMap(window.OverworldMaps.StreetNorthLower); //switch location
  
  this.directionInput = new DirectionInput();
  this.directionInput.init();

  this.startGameloop();
 


  
  }

}
