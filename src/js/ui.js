import {Vector, Actor, Label, Font, FontUnit, Color, ScreenElement} from "excalibur"
import {Resources} from "./resources.js";
import {Hearts} from "./hearts.js";

export class UI extends ScreenElement {

    hearts

    constructor() {
        super()
        this.label = new Label({
            text: 'Score: 0',
            pos: new Vector(100, 100),
            font: new Font({
                family: 'Arial',
                size: 24,
                unit: FontUnit.Px,
                color: Color.White
            })
        })
        this.addChild(this.label)

    }

    onInitialize(engine) {
        this.hearts = new Hearts()

        this.addChild(this.hearts)
        this.hearts.pos = new Vector(500, 500)
    }


    showScore(score) {
        this.label.text = `Score: ${score}`
    }
}