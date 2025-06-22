import {Actor, Keys, range, SpriteSheet, Vector, Animation, CollisionType, DegreeOfFreedom} from "excalibur";
import {Resources} from "./resources.js";

export class Player extends Actor {

    hitpoints


    constructor() {
        super({
            width: Resources.SeagullIdle.width, height: Resources.SeagullIdle.height,
            radius: 100
        })
        this.graphics.use(Resources.SeagullIdle.toSprite());
        this.scale = new Vector(0.2, 0.2);
        this.body.collisionType = CollisionType.Active
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation)

    }

    onInitialize(engine) {

        this.on('collisionstart', (event) => this.hitSomething(event))
        this.hitpoints = 3


    }

    onPreUpdate(engine, delta) {
        this.graphics.use(Resources.SeagullIdle.toSprite());

        let xspeed = 0;
        let yspeed = 0;
        if (engine.input.keyboard.isHeld(Keys.Left) && this.pos.x > 30) {
            this.body.applyLinearImpulse(new Vector(-5 * delta, 0))

            this.graphics.use(Resources.SeagullFlap.toSprite());
            this.angularVelocity = -1


        }
        if (engine.input.keyboard.isHeld(Keys.Right) && this.pos.x < 770) {
            this.body.applyLinearImpulse(new Vector(5 * delta, 0))
            this.graphics.use(Resources.SeagullFlap.toSprite());
            this.angularVelocity = 1


        }
        if (engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -100
            this.graphics.use(Resources.SeagullFlap.toSprite());
            this.vel = new Vector(xspeed, yspeed);
        }
        if (engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = 100
            this.graphics.use(Resources.SeagullFlap.toSprite());
            this.vel = new Vector(xspeed, yspeed);
        }


        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.body.applyLinearImpulse(new Vector(0, -250 * delta))
        }



    }


    reduceHealth() {
        this.hitpoints--
        this.scene.engine.ui.showHealth(this.hitpoints / 10)
    }


    hitSomething(event) {
        console.log(`we hit something! ${event.other.owner}`)
    }
}