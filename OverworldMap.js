class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new image();
        this.lowerImage.src = config.lowerSrc; //overcharacters

        this.UpperImage = new image();
        this.upperImage.src = config.upperSrc; //overcharacters
        
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
            hero: new GameObject({
                x: 3,
                y: 1,
            }),
            
            npc1: new GameObject({
                x: 9,
                y: 2,
                src: "/images/characters/people/npc1.png"
            })
        }
    },

    GreenKitchen: {
        lowerSrc: "/images/maps/GreenKitchenLower.png",
        upperSrc: "/images/maps/GreenKitchenUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 3,
                y: 2,
            }),
            
            npcA: new GameObject({
                x: 4,
                y: 2,
                src: "/images/characters/people/npc2.png"
            })
        }

    },
}
  