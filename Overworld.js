class Overworld {
 constructor(config) {
   this.element = config.element;
   this.canvas = this.element.querySelector(".game-canvas");
   this.ctx = this.canvas.getContext("2d");
 }
 startGameloop() {
   const step = () => {
     requestAnimationFrame(() => {
      step();
     })
   }
   step();
 }

 init() {

  this.startGameloop();
   const image = new Image();
   image.onload = () => {
     this.ctx.drawImage(image,0,0)
   };
   image.src = "/images/maps/StreetNorthLower.png"; 
    //background

    //Place some Game Objects

    //if there is no source they default to game object
    const hero = new GameObject({
      x: 5,
      y: 6,
    })
    const npc1 = new GameObject({
      x: 7,
      y: 9,
      src: "/images/characters/people/npc1.png"
    })

    const npc4 = new GameObject({
      x: 2,
      y: 10,
      src: "/images/characters/people/npc4.png"
    })
    
    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      npc1.sprite.draw(this.ctx);
      npc4.sprite.draw(this.ctx);

    }, 200)
  
 } 

}