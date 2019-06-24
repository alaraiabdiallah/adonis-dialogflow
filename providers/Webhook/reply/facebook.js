const { Payload } = require('dialogflow-fulfillment');

const platform = "FACEBOOK";

class ButtonBuilder{

    constructor(){}
    
    postBack({title,payload}){
        try{
            const type = "postback";
            if (payload == undefined) throw "payload parameter not defined"
            return { type,title,payload }
        }catch(err){
            console.error(err);
        }
    }

    url({title,url, webview_height_ratio, messenger_extensions, fallback_url, webview_share_button}){
        try{
            const type = "web_url";
            if (url == undefined) throw "url parameter not defined"
            return { type,title,url, webview_height_ratio, messenger_extensions, fallback_url, webview_share_button }
        }catch(err){
            console.error(err);
        }
    }
}

class QuickReplyBuilder{

    constructor(){
    }

    replyItem({ content_type, title, payload, image_url }){
        
        try{

            if(content_type == undefined)
                throw "title parameter not defined";

            if(content_type == "location")
                return { content_type };
            
            if(content_type == "text"){
                if (title == undefined) throw "title parameter not defined"
                if (payload == undefined) throw "payload parameter not defined"

                return { content_type, title, payload, image_url };
            }

        }catch(err){
            console.error(err);
        }
    }

    replyText({ title, payload, image_url }){
        try{
            const content_type = "text"
            if (title == undefined) throw "title parameter not defined"
            if (payload == undefined) throw "payload parameter not defined"

            return { content_type, title, payload, image_url };
        }catch(err){
            console.error(err);
        }
    }

    replyLocation(){
        try{
            const content_type = "location";
            return { content_type };
        }catch(err){
            console.error(err);
        }
    }

    build({text, quick_replies}){
        try{
            if(text == undefined)
                throw "text parameter not defined";
            if(quick_replies == undefined)
                throw "quick_replies parameter not defined";

            this.payload = {text, quick_replies};
            return new Payload(platform,this.payload,{ sendAsMessage: true })
        }catch(err){
            console.error(err);
        }
    }
    
}

class TemplateGeneric{

    constructor(){
    }

    static build({elements}){
        try{
            if(elements == undefined)
                throw "elements parameter not defined!";
                
            if(elements.length > 10)
                throw "elements only consist 10 element!";

            const p = { "template_type":"generic", elements } 
            const template = { attachment : { type: "template", payload:p }}

            this.payload = { ...template };
            return new Payload(platform,this.payload,{ sendAsMessage: true })
        }catch(err){
            console.error(err);
        }
    }
}

class GenericEl{
    constructor(){
    }

    static make({ title, subtitle, image_url, default_action, buttons }){
        try {
            if(title == undefined)
                throw "title parameter not defined";
            
            return { title, subtitle, image_url, default_action, buttons };
        } catch (err) {
            console.error(err);
        }
    }
}

class FacebookReply{
    constructor(){
        return {
            ButtonBuilder,
            QuickReplyBuilder,
            TemplateGeneric,
            GenericEl
        }
    }
}

module.exports = FacebookReply;