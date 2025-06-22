import {Actor, CollisionType, Vector} from "excalibur";
import {Resources} from "./resources.js";


export class Platform extends Actor {

constructor() {
    super({
        width: Resources.Platform.width,
        height: Resources.Platform.height
    });
    this.graphics.use(Resources.Platform.toSprite())
    this.body.collisionType = CollisionType.Fixed
    this.scale = new Vector(0.2, 0.2);

}

onInitialize(engine) {

}


}