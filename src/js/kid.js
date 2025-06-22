import {Actor, CollisionType, Vector} from "excalibur";
import {Resources} from "./resources.js";


export class Kid extends Actor {
    constructor() {
        super({width: Resources.Kid.width, height: Resources.Kid.height})
        this.scale = new Vector(0.2, 0.2);
        this.body.collisionType = CollisionType.Fixed


    }

    onInitialize(engine) {
        this.graphics.use(Resources.Kid.toSprite())
        this.scale = new Vector(0.4, 0.4);
        this.vel.x = -250;


    }

    onPreUpdate(engine, elapsed) {
        if (this.pos.x < 100) {
            console.log('turn right')
            this.vel.x = 250;

        }
        if (this.pos.x > 3100) {
            console.log('turn left')
            this.vel.x = -250;

        }

    }
}