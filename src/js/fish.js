import { Actor, CollisionType, Vector, DegreeOfFreedom, CompositeCollider, Shape, SpriteSheet, Animation, AnimationStrategy, range, Keys } from 'excalibur';
import {Resources} from "./resources.js";

export class Fish extends Actor {

    constructor() {
        super({width:Resources.Fish.width, height:Resources.Fish.height})
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(300, 300)
        // this.vel = new Vector(-10, 0)
        this.on('collisionstart', (event) => this.hitSomething(event))
        this.angularVelocity = 0.2

        this.events.on("exitviewport", () => this.kill());
    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
        if (engine.input.keyboard.isHeld(Keys.Left) && this.pos.x > 30) {
            xspeed = -100
        }
        if (engine.input.keyboard.isHeld(Keys.Right) && this.pos.x < 770) {
            xspeed = 100
        }
        if (engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -100
        }
        if (engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = 100
        }
        this.vel = new Vector(xspeed, yspeed);


        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            console.log('shoot!')
        }


    }


    hitSomething(event) {
        console.log(`we hit something! ${event.other.owner}`)
    }
}