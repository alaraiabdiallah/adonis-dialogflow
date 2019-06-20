const { WebhookClient } = require('dialogflow-fulfillment');
const intents = require("../../start/intents");
class Webhook {
    
    constructor (Config) {
        this.Config = Config
    }


    handleRequest({ request, response }){
        try {
            const agent = new WebhookClient({ request, response });
      
            console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
            console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
            
            let intentMap = new Map();
            for(let i = 0; i < intents.length;i++)
                intentMap.set(intents[i].name, require(`../../app/Webhook/Intents/${intents[i].handler}`));
            
            agent.handleRequest(intentMap);
        } catch (error) {
            console.error(error);
        }
    }


}

module.exports = Webhook;