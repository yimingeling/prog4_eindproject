import {Actor, BoundingBox, CollisionType, randomInRange, Scene, Timer, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Player} from "../player.js";
import {UI} from "../ui.js";
import {Platform} from "../platform.js";
import {CoastLine} from "./coastline.js";
import {Fry} from "../fry.js";
import {Kid} from "../kid.js";
import {Finish} from "../finish.js";


export class Level1 extends Scene {

    constructor() {
        super();
    }

    onInitialize(engine) {
        //background
        const bg = new Actor({})
        bg.graphics.use(Resources.Bg.toSprite())
        bg.body.collisionType = CollisionType.Passive
        bg.pos = new Vector(0, 0)
        bg.scale = new Vector(0.5, 0.5);
        bg.anchor = Vector.Zero
        this.add(bg)


        const coastline = new CoastLine()
        coastline.pos = new Vector(0, 0)
        this.add(coastline)


        const platform = new Platform()
        const platform1 = new Platform()
        const platform2 = new Platform()
        const platform3 = new Platform()
        const platform4 = new Platform()
        const platform5 = new Platform()
        const platform6 = new Platform()
        const platform7 = new Platform()
        const platform8 = new Platform()
        const platform9 = new Platform()

        platform.pos = new Vector(100, 900)
        platform1.pos = new Vector(500, 900)
        platform2.pos = new Vector(700, 600)
        platform3.pos = new Vector(1200, 900)
        platform4.pos = new Vector(1600, 700)
        platform5.pos = new Vector(2000, 900)
        platform6.pos = new Vector(3000, 960)
        platform7.pos = new Vector(100, 900)
        platform8.pos = new Vector(100, 900)
        platform9.pos = new Vector(100, 900)


        this.add(platform)
        this.add(platform1)
        this.add(platform2)
        this.add(platform3)
        this.add(platform4)
        this.add(platform5)
        this.add(platform6)


        //fish
        // const fish = new Fish()
        // this.add(fish)

        const player = new Player()
        player.pos = new Vector(100, 800)

        this.add(player)
        this.camera.strategy.lockToActor(player)
        this.camera.strategy.limitCameraBounds(new BoundingBox(0, 0, 5100, 1200))

        const fry = new Fry()
        fry.pos = new Vector(randomInRange(10, 3000), 930)
        this.add(fry)

        for (let i = 0; i < 10; i++) {
            const fry = new Fry()
            fry.pos = new Vector(randomInRange(10, 3000), 930)
            this.add(fry)
            console.log('spawn')
        }


        const finish = new Finish()
        finish.pos = new Vector(3500, 930)
        this.add(finish)


            const kid = new Kid()
            kid.pos = new Vector(300, 1100)
            this.add(kid)


        this.events.on("exitviewport", (e) => this.fishLeft(e))


        const ui = new UI()
        this.add(ui)
        this.ui = ui;

    }



}