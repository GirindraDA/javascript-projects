class Wolf {
    constructor(){
        this.strength = Math.floor(Math.random()*100);
    }

    howl(){
        console.log('Owooooooooo!');
    }
}

//Todo 2
module.exports = Wolf;