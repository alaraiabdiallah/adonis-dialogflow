const { BaseIntent } = require('./BaseIntent');
class Hungry extends BaseIntent{
    constructor(agent){
        super(agent);
    }

    logicHandler(){

    }

    lineResponseHandler(){
        this.send("Ini dari line");
    }

    facebookResponseHandler(){
        this.send("Ini dari facebook");
    }
}

module.exports = function(agent){
    new Hungry(agent)
}