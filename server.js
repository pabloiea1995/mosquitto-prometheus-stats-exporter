const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const register = require("./promClient").register;
const mqttConection = require("./mqttconexion");
const config = require("./config");



server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//routes
//server.use(require('./routes/api'));

server.get('/metrics', (req, res) => {
	res.set('Content-Type', register.contentType);
	res.end(register.metrics());
});


//Enable collection of default metrics
//client.collectDefaultMetrics();

console.log(`Server listening to ${config.deploymentPort}, metrics exposed on /metrics endpoint`);
server.listen(config.deploymentPort);

mqttConection.mqttCicles();