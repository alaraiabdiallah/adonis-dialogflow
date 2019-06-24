const { ServiceProvider } = require('@adonisjs/fold')

const Webhook = require('./index');
const FacebookReply = require("./reply/facebook");
class WebhookProvider extends ServiceProvider {
  register () {
    this.app.singleton('Gits/Webhook', () => {
      const Config = [];
      return new Webhook(Config)
    });

    this.app.singleton('Gits/Webhook/Reply/Facebook', () => {
      return new FacebookReply();
    })
  }
}

module.exports = WebhookProvider