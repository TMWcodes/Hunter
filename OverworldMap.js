class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
    
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
    
        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
      }
    
      drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0)
      }
    
      drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0)
      } 
}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "/images/maps/DemoLower.png",
        upperSrc: "/images/maps/DemoUpper.png",
        gameObjects: {
          hero: new GameObject({
            x: 5,
            y: 6,
          }),
          npc1: new GameObject({
            x: 7,
            y: 9,
            src: "/images/characters/people/npc1.png"
          })
        }
      },
    StreetNorthLower: {
        lowerSrc: "/images/maps/StreetNorthLower.png",
        upperSrc: "/images/maps/StreetNorthUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 3,
                y: 1,
            }),
            
            npc1: new GameObject({
                x: 3,
                y: 3,
                src: "/images/characters/people/npc1.png"
            })
        }
    },
    GreenKitchen: {
        lowerSrc: "/images/maps/GreenKitchenLower.png",
        upperSrc: "/images/maps/GreenKitchenUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 6,
                y: 7,
            }),
            
            npcA: new GameObject({
                x: 4,
                y: 5,
                src: "/images/characters/people/npc2.png"
            })
        }
    },
}
  