const { Payload } = require('dialogflow-fulfillment');
let templatePayload = { type: "template", template: {} };

const platform = "LINE";

class Carousel{


    constructor(){}

    static build({columns, altText, imageAspectRatio, imageSize}){
        try{
            if(altText == undefined)
                throw "altText parameter not defined";
            if(columns == undefined)
                throw "columns parameter not defined";

            let payload = templatePayload;
            payload.template.type = "carousel";
            payload.altText = altText;
            if(imageAspectRatio)
                payload.template.imageAspectRatio = imageAspectRatio;
            if(imageSize)
                payload.template.imageSize = imageSize;
            
            payload.template.columns = columns;

            return new Payload(platform,payload,{ sendAsMessage: true })
        }catch(err){
            console.error(err);
        }
    }

    static column({text, actions, thumbnailImageUrl,title, imageBackgroundColor,defaultAction}){
        try {
            if(text == undefined)
                throw "text parameter not defined";
            if(actions == undefined)
                throw "actions parameter not defined";
            return {text, actions, thumbnailImageUrl,title, imageBackgroundColor,defaultAction} 
        } catch (err) {
            console.log(err);
        }
    }
}

class Actions{
    
    constructor(){}

    static message({label,text}){
        try {
         const type = "message";
         if(text == undefined)
                throw "text parameter not defined";
         if(label == undefined)
            throw "label parameter not defined";
         return {type, label, text};
        } catch (err) {
            console.log(err);
        }
    }
}


class LineReply{
    constructor(){
        return {
            Carousel,
            Actions
        }
    }
}


module.exports = LineReply;