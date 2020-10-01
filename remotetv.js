class TV {
    constructor(chanel, volum) {
        this.chanel = chanel;
        this.volum = volum;
        this.status = true;
    }

    changeChan(newChanel) {
        this.chanel = newChanel;
    }

    changeVolum(newVolum) {
        this.volum = newVolum;
    }
}

class Remote {
    constructor(Code) {
        this.Code = Code;
    }

    changeChanel(TV, newChanel) {
        TV.changeChan(newChanel);
    }
}

let tvone = new TV(2, 66, true);
console.log(tvone);
let remote1 = new Remote(600);
console.log(remote1);

remote1.changeChanel(tvone, 70);
console.log(tvone);