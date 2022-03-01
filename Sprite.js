class Sprite {
    constructor(config) {

        //set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }
     

        //configuring animation and initial state
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
        }
        //capture the actual animation frame, default idle down key.
        this.currentAnimation = config.currentAnimation || "idleDown";
        //which animation frame should be showing
        this.currentAnimationFrame = 0;
   

        //reference game object
        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x * 16 - 8;
        const x = this.gameObject.x * 16 - 18;

      ctx.drawImage(this.image,
            0, //from Overworld.js + isLoaded
            0,
            32, 
            32, 
            x,y,
            32,
            32
        )
    }
}