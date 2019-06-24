const { BaseIntent } = require('./BaseIntent');
const FacebookReply = use('Gits/Webhook/Reply/Facebook');
const LineReply = use('Gits/Webhook/Reply/Line');

const { Payload } = require('dialogflow-fulfillment');

const products = [
    { name: "Aqua", image:"https://assets.klikindomaret.com/products/10036631/10036631_2.jpg" },
    { name: "Mizone", image:"https://www.lifull-produk.id/bundles/assets/img/product/mizone%20lychee%20lemon.jpg" },
];

/* 
    Hungry handler that correspond to hungry intent in dialogflow
*/
class Hungry extends BaseIntent{
    constructor(agent){
        super(agent);
    }

    logicHandler(){
        this.products = products;
    }

    lineResponseHandler(){
        const { Carousel, QuickReply, Actions, ButtonTemplate, Confirm } = LineReply;
        
        // let carousel = Carousel.build({
        //     altText: "List Product",
        //     columns: [...this._mapCarousel()]
        // })
        // this.send("Ini dari line");

        // this.send(carousel);

        // let buttons = ButtonTemplate.build({
        //     altText: "Buttons",
        //     thumbnailImageUrl: "https://assets.klikindomaret.com/products/10036631/10036631_2.jpg",
        //     imageSize: "cover",
        //     imageAspectRatio: "rectangle",
        //     text: "please select",
        //     title: "menu",
        //     actions: [
                // Actions.message({label: "Ya",text: "Ya",}),
                // Actions.message({label: "Tidak",text: "tidak",})
        //     ]
        // });

        // this.send(buttons);

        let confirm = Confirm.build({
            altText: "Confirmation",
            text: "Are you sure?",
            actions: [
                Actions.message({label: "Ya",text: "Ya",}),
                Actions.message({label: "Tidak",text: "tidak",})
            ]
        });

        this.send(confirm);
        
    }

    _mapCarousel(){
        return this.products.map(this._carouselItem)
    }

    _carouselItem(d){
        const { Carousel, Actions } = LineReply
        const actions = [
            Actions.message({label: "Pilih",text: d.name}),
        ];
        return Carousel.column({thumbnailImageUrl: d.image, title: d.name, text: d.name, actions});
    }

    facebookResponseHandler(){
        const { Generic, ButtonTemplate, Button } = FacebookReply;

        // this.send("Ini dari facebook");
        // const generics = Generic.build({
        //     elements: [ ...this._mapGeneric() ]
        // });
        // this.send(generics);

        let buttons = ButtonTemplate.build({
            text: "Are you sure?",
            buttons: [
                Button.postBack({title:"Ya",payload:"Ya"}),
                Button.postBack({title:"Tidak",payload:"tidak"}),
            ]
        })
    }

    _mapGeneric(){
        return this.products.map(this._genericItem)
    }

    _genericItem(d){
        const { Generic, Button } = FacebookReply;
        return Generic.item({
            title: d.name,
            image_url: d.image,
            subtitle: d.name,
            buttons: [
                Button.postBack({title:d.name,payload:d.name})
            ]
        })
    }
}

module.exports = function(agent){
    new Hungry(agent)
}