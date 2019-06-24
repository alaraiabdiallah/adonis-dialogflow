const { Payload } = require('dialogflow-fulfillment');
let templatePayload = { type: "template", template: {} };

const platform = "LINE";

class CarouselBuilder{


    constructor(){}

    build({columns, altText}){
        try{
            if(altText == undefined)
                throw "altText parameter not defined";
            if(columns == undefined)
                throw "columns parameter not defined";

            let payload = templatePayload;
            payload.template.type = "carousel";
            payload.template.columns = columns;
            return new Payload(platform,payload,{ sendAsMessage: true })
        }catch(err){
            console.error(err);
        }
    }
}


module.exports = {
    CarouselBuilder
}