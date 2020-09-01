// Soal 1

// Release 0
class Animal {
    constructor (name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }

    get geName () {
        return this.name;
    }

    set setName (name) {
        this.name = name;
    }

    get getLegs () {
        return this.legs;
    }

    get getColdBlooded () {
        return this.cold_blooded;
    }
}

var sheep = new Animal("shaun");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// Release 1

class Frog extends Animal {
    constructor (name) {
        super(name);
    }

    jump () {
        console.log('hop hop');
    }
}

class Ape extends Animal {
    constructor (name) {
        super(name);
        this.legs = 2;
    }

    yell () {
        console.log('Auooo');
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell();
 
var kodok = new Frog("buduk")
kodok.jump();

// Soal 2

class Clock {
    constructor({template}) {
        this.template = template;
        this.timer = 0;
    }

    get getTemplate() {
        return this.template;
    }

    render () {
        const date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
    
        console.log(output);
    }

    stop () {
        clearInterval(this.timer);
    }

    start () {
        this.render();
        this.timer = setInterval(this.render.bind(this), 1000);
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();