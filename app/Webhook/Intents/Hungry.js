const { BaseIntent } = require('./BaseIntent');
class Hungry extends BaseIntent{
    constructor(agent){
        super(agent);
    }

    logicHandler(){

    }

    lineResponseHander(){
        this.send("Ini dari line");
    }

    facebookResponseHander(){
        this.send("Ini dari facebook");
    }
}

module.exports = function(agent){
    new Hungry(agent)
}