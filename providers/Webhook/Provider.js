const { ServiceProvider } = require('@adonisjs/fold')

const Webhook = require('./index');
const { ButtonBuilder,TemplateGeneric,GenericEl } = require("./reply/facebook");
class WebhookProvider extends ServiceProvider {
  register () {
    this.app.singleton('Gits/Webhook', () => {
      const Config = [];
      return new Webhook(Config)
    });

    this.app.singleton('Gits/Webhook/Reply/ButtonBuilder', () => {
      return new ButtonBuilder();
    })

    this.app.singleton('Gits/Webhook/Reply/TemplateGeneric', () => {
      return new TemplateGeneric();
    });
    this.app.singleton('Gits/Webhook/Reply/GenericElement', () => {
      return new GenericEl();
    });
  }
}

module.exports = WebhookProvider