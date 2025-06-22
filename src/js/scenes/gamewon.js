import {Actor, BoundingBox, CollisionType, randomInRange, Scene, Timer, Vector} from "excalibur";
import {Resources} from "../resources.js";
import {Player} from "../player.js";
import {UI} from "../ui.js";
import {Platform} from "../platform.js";
import {CoastLine} from "./coastline.js";
import {Fry} from "../fry.js";
import {Kid} from "../kid.js";
import {Finish} from "../finish.js";


export class GameWon extends Scene {

    constructor() {
        super();
    }

    onInitialize(engine) {
        //background
        const bg = new Actor({})
        bg.graphics.use(Resources.Bg3.toSprite())
        bg.body.collisionType = CollisionType.Passive
        bg.pos = new Vector(0, 0)
        bg.anchor = Vector.Zero
        this.add(bg)


        const ui = new UI()
        this.add(ui)
        this.ui = ui;

    }



}