const { ServiceProvider } = require('@adonisjs/fold')

const Webhook = require('./index');
class WebhookProvider extends ServiceProvider {
  register () {
    this.app.singleton('Gits/Webhook', () => {
      const Config = [];
      return new Webhook(Config)
    })
  }
}

module.exports = WebhookProvider