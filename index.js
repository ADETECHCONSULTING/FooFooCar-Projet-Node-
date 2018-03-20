const restify = require('restify');

const server = restify.createServer({
    name: "FooFooCarServer",
    version : "1.0.0"
});


server.use(restify.plugins.bodyParser());
require('./settings')(server);      // Loading settings
require('./models')(server);        // Loading models
require('./controllers')(server);   // Loading controllers
require('./routes')(server);        // Loading routesn

/*
require('./middlewares')(server);   // Loading middlewares
*/

server.listen(server.settings.port);
console.log(`Server is listening on port ${server.settings.port}`);