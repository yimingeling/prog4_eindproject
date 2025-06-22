import {Actor, Keys, range, SpriteSheet, Vector, Animation, CollisionType, DegreeOfFreedom} from "excalibur";
import {Resources} from "./resources.js";
import {Fry} from "./fry.js";
import {Kid} from "./kid.js";
import {Finish} from "./finish.js";

export class Player extends Actor {

    hitpoints
    score

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
        this.score = 0

    }

    onPreUpdate(engine, delta) {
        this.graphics.use(Resources.SeagullIdle.toSprite());

        let xspeed = 0;
        let yspeed = 0;
        if (engine.input.keyboard.isHeld(Keys.Left)) {
            this.vel.x = -250;


            this.graphics.use(Resources.SeagullFlap.toSprite());
            this.angularVelocity = -1


        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            this.vel.x = 250;

            this.graphics.use(Resources.SeagullFlap.toSprite());
            this.angularVelocity = 1


        }

        if (engine.input.keyboard.isHeld(Keys.Up) && this.vel.y > 0) {
            this.graphics.use(Resources.SeagullFlap.toSprite());

            this.vel.y = 30;

        }


        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.graphics.use(Resources.SeagullFlap.toSprite());

            this.vel = new Vector(xspeed, delta);
            this.body.applyLinearImpulse(new Vector(0, -450 * delta))
        }

        if (this.pos.y > 1300) {
            this.scene.engine.gameOver();

        }

    }


    reduceHealth() {
        this.hitpoints--
        this.scene.ui.hearts.showHearts(this.hitpoints)
    }


    hitSomething(event) {
        if (event.other.owner instanceof Fry) {
            console.log("hit the fry")
            event.other.owner.kill()
            this.score++
            this.scene.ui.showScore(this.score);

        }
        if (event.other.owner instanceof Kid) {
            console.log("hit the kid")
            this.reduceHealth()

        }
        if (event.other.owner instanceof Finish) {
            console.log("we won")
            this.reduceHealth()
            this.scene.engine.gameWon();


        }
        console.log(`we hit something! ${event.other.owner}`)
    }
}