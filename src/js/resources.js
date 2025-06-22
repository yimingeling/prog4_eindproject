import {ImageSource, Sound, Resource, Loader, ImageWrapping} from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Bg: new ImageSource('images/level.png'),
    Bg2: new ImageSource('images/water.jpg'),
    Bg3: new ImageSource('images/water2.jpg'),
    Platform: new ImageSource('images/platform.png'),
    Fry: new ImageSource('images/fry.png'),
    Kid: new ImageSource('images/kid.png'),

    //player
    SeagullIdle: new ImageSource('images/player/seagullIdle.png'),
    SeagullFlap: new ImageSource('images/player/seagullFlap.png'),

    Heart: new ImageSource('images/heart.png', {wrapping: ImageWrapping.Repeat})
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }