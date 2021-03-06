class BaseIntent{
    constructor(agent){
        this._agent = agent;
        this._request= agent.request_;
        this._body  = agent.request_.body;
        this.logicHandler();
        this.platformResponseHandler();
    }

    platformResponseHandler(){
        const { originalDetectIntentRequest } = this._body;
        switch(originalDetectIntentRequest.source){
            case 'line':
                this.lineResponseHandler(); break;
            case 'facebook':
                this.facebookResponseHandler(); break;
        }
    }

    send(richMessage){
        this._agent.add(richMessage);
    }
}

module.exports.BaseIntent = BaseIntent;