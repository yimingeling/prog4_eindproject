import '../css/style.css'
import {
    Actor,
    Engine,
    Vector,
    DisplayMode,
    Label,
    BoundingBox,
    FontUnit,
    Color,
    Font,
    SolverStrategy,
    Timer
} from "excalibur"
import {Resources, ResourceLoader} from './resources.js'
import {Fish} from "./fish.js";
import {Player} from "./player.js";
import {UI} from "./ui.js";
import {Level1} from "./scenes/level1.js";
import {Gameover} from "./scenes/gameover.js";
import {GameWon} from "./scenes/gamewon.js";


const options = {
    width: 800, height: 600,
    backgroundColor: Color.White,
    physics: {
        solver: SolverStrategy.Realistic,
        gravity: new Vector(0, 800),
    },
    maxFps: 60,
    displayMode: DisplayMode.FitScreen,
    suppressPlayButton: true
}


export class Game extends Engine {

    ui
    hearts


    constructor() {
        super(options)
        this.start(ResourceLoader).then(() => this.startGame())


    }

    onInitialize(engine) {
        this.level1 = new Level1(this)
        this.add('level', this.level1)

        this.gameover = new Gameover(this)
        this.add('gameover', this.gameover)

        this.gamewon = new GameWon(this)
        this.add('gamewon', this.gamewon)
    }

    startGame() {
        console.log("start de game!")
        this.goToScene('level');

        const timer = new Timer({
            fcn: () => console.log('Every 100 ms'),
            repeats: true,
            interval: 100,
        })

        this.add(timer)

        timer.start()





    }

    gameOver(){


        this.goToScene('gameover');

    }
    gameWon(){


        this.goToScene('gamewon');

    }
}

new Game()
