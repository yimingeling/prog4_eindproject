import {Actor, CollisionType, Vector} from "excalibur";
import {Resources} from "./resources.js";


export class Fry extends Actor{
    constructor() {
        super({width:Resources.Fry.width, height:Resources.Fry.height})
        this.scale = new Vector(0.2, 0.2);
        this.body.collisionType = CollisionType.Active


    }

    onInitialize(engine) {
        this.graphics.use(Resources.Fry.toSprite())

    }
}