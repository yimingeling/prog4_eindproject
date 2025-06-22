import {Actor, BoundingBox, CollisionType, Scene, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Player} from "../player.js";
import {UI} from "../ui.js";
import {Platform} from "../platform.js";
import {CoastLine} from "./coastline.js";


export class Level1 extends Scene {

    constructor() {
        super();
    }

    onInitialize(engine) {
        //background
        const bg = new Actor({
        })
        bg.graphics.use(Resources.Bg.toSprite())
        bg.body.collisionType = CollisionType.Passive
        bg.pos = new Vector(400,300)
        bg.scale = new Vector(0.5, 0.5);
        this.add(bg)

        const coastline = new CoastLine()
        this.add(coastline)


        const platform = new Platform()
        platform.pos = new Vector(400,400)
        this.add(platform)



        //fish
        // const fish = new Fish()
        // this.add(fish)

        const player = new Player()
        player.pos = new Vector(400,300)

        this.add(player)
        this.camera.strategy.lockToActor(player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 2000, 1200))




        this.events.on("exitviewport", (e) => this.fishLeft(e))


        const ui = new UI()
        this.add(ui)




    }

    fishLeft(e) {
        e.target.pos = new Vector(1350, 300)

    }


}