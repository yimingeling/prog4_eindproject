import {Actor, CollisionType, CompositeCollider, Shape, Vector} from "excalibur";

export class CoastLine extends Actor {
    onInitialize(engine) {
        let landscape = new CompositeCollider([
            Shape.Edge(new Vector(0, 0), new Vector(0, 1500)),
            Shape.Edge(new Vector(0, -100), new Vector(10000, -100)),
            Shape.Edge(new Vector(0, 1150), new Vector(3100, 1150)),
            Shape.Edge(new Vector(3700, 1150), new Vector(10000, 1150)),
            Shape.Edge(new Vector(280 , 440), new Vector(1230, 440)),
            Shape.Edge(new Vector(3500, 960), new Vector(3850, 960))
        ])
        this.body.collisionType = CollisionType.Fixed
        this.collider.set(landscape)
       }
}