'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const Webhook = use("Gits/Webhook"); 

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});

Route.post('/webhook', ({ request, response }) => {
  Webhook.handleRequest({ request, response });
});
