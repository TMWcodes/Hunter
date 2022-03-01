class Overworld {
 constructor(config) {
   this.element = config.element;
   this.canvas = this.element.querySelector(".game-canvas");
   this.ctx = this.canvas.getContext("2d");
   this.map = null;
 }

 startGameloop() {
   const step = () => {
    
    // draw lower layer
    this.map.drawLowerImage(this.ctx);

    //draw game objects
    Object.values(this.map.gameObjects).forEach(object => {
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
  this.map = new OverworldMap(window.OverworldMaps.GreenKitchen); 
  this.startGameloop();
 


  
  }

}
