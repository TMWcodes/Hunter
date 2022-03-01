class Sprite {
    constructor(config) {

        //set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }
        //shadow
        this.shadow = new Image();
        this.useShadow = true;
        if(this.useShadow) {
        this.shadow.src = "/images/characters/shadow.png";
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
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
        const y = this.gameObject.y * 16 - 18;
  //from Overworld.js + isLoaded
        this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);
        
        this.isLoaded && ctx.drawImage(this.image,
            0,0,
            32,32, 
            x,y,
            32,32
        )
    }
}