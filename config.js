module.exports = {

    readInstalationsConfig: function () {
      const yaml = require('js-yaml');
      const fs = require('fs');
  
      try {
  
        const config = yaml.safeLoad(fs.readFileSync('configuration.yml', 'utf8'));
        module.exports.mainConfig = config; 
        //Deployment port
        module.exports.deploymentPort = config.configuration.deployment.port;
        //Mqtt broker info
        module.exports.brokerMqttInfo = config.configuration.brokerMqttInfo;
        console.log("Info",`(${new Date().toISOString()}) -- Configuration loaded successfully`);
      } catch (e) {
        console.log("Error",`(${new Date().toISOString()}) -- Error loading configuration from configuation file`);

        console.log(e);
      }
    }
  }
  
  module.exports.readInstalationsConfig();
