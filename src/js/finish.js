import {Actor, CollisionType, Vector} from "excalibur";
import {Resources} from "./resources.js";


export class Finish extends Actor {
    constructor() {
        super({width:Resources.Fish.width, height:Resources.Fry.height})

    }

    onInitialize(engine) {
        this.graphics.use(Resources.Fish.toSprite())

    }
}