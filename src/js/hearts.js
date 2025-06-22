import {Actor, Sprite, Vector} from "excalibur";
import {Resources} from "./resources.js";


export class Hearts extends Actor {
    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Heart,
            sourceView: {x: 0, y: 0, width: 55, height: 55},
            destSize: {width: 55, height: 55}
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
        this.showHearts(3)
    }


    showHearts(amount) {
        this.sprite.sourceView.width = amount * 55;
        this.sprite.destSize.width = amount * 55;
    }

}