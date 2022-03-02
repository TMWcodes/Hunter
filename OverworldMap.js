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
    StreetNorthLower: {
        lowerSrc: "/images/maps/StreetNorthLower.png",
        upperSrc: "/images/maps/StreetNorthUpper.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
              }),
              npc1: new Person({
                x: utils.withGrid(7),
                y: utils.withGrid(9),
                src: "/images/characters/people/npc1.png"
              })
            }
          },
    InnerNonNative: {
        lowerSrc: "/images/maps/InnerNonNative.png",
        upperSrc: "",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
                }),
                npc1: new Person({
                    x: utils.withGrid(7),
                    y: utils.withGrid(9),
                    src: "/images/characters/people/npc1.png"
                  })
                }
            },
    GreenKitchen: {
        lowerSrc: "/images/maps/GreenKitchenLower.png",
        upperSrc: "/images/maps/GreenKitchenUpper.png",
        gameObjects: {
            hero: new Person({
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
  