module.exports = {

  mqttCicles: function () {

    //Dependencias 
    var mqtt = require('mqtt');
    var config = require('./config');
    const promClient = require('./promClient');
    //----------
    //Cargo la configuracion de la clase de configuracion




    //Instancio el cliente mqtt a la URL del broker
    console.log("Debug", `(${new Date().toISOString()}) -- Connecting to MQTT Broker`);
    var client = mqtt.connect(config.brokerMqttInfo.mqttBrokerURL);

    var retryConnection = true; //variable que recoje si se tiene que reintentar la conexion, inicialmente a true

    var retryCounter = 0; //contador de reintentos de la conexion
    var counter = 1
    //inicio la conexion al brokerMQTT
    if (retryConnection) {
      //mientras se tenga que reintentar la conexion


      if (retryCounter < 4) {
        //la conexion se reintentará 3 veces seguidas

        client.on('connect', function (error) {

          retryConnection = false;

          console.log("Debug", `${new Date().toISOString()} -- Conexión with MQTT Broker stablish`)

          var now = new Date();

          client.subscribe(config.brokerMqttInfo.mqttMainTopic, { qos: 1 }, function (err) {


          }).on('message', (topic, message) => {

            //On message evaluating each topic to modify it's metric
            console.log(topic)
            //Topic: $SYS/broker/bytes/received
            //Metric: The total number of bytes received since the broker started.
            switch (topic) {
              case "$SYS/broker/bytes/received":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_total_bytes_received: ${message}`)
                promClient.mosquittoMetrics.bytes_recieved.set(parseInt(message))
                break;

              case "$SYS/broker/bytes/sent":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_total_bytes_sent: ${message}`)
                promClient.mosquittoMetrics.bytes_sent.set(parseInt(message))
                break;

              case "$SYS/broker/clients/connected":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_current_clients_connected: ${message}`)
                promClient.mosquittoMetrics.clients_connected.set(parseInt(message))
                break;
              case "$SYS/broker/clients/expired":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_current_clients_expired: ${message}`)
                promClient.mosquittoMetrics.clients_expired.set(parseInt(message))
                break;
              case "$SYS/broker/clients/disconnected":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_current_clients_disconnected: ${message}`)
                promClient.mosquittoMetrics.clients_disconnected.set(parseInt(message))
                break;
              case "$SYS/broker/clients/maximum":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_current_clients_maximum: ${message}`)
                promClient.mosquittoMetrics.clients_maximum.set(parseInt(message))
                break;
              case "$SYS/broker/clients/total":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_current_clients_total: ${message}`)
                promClient.mosquittoMetrics.clients_total.set(parseInt(message))
                break;
              case "$SYS/broker/heap/current":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_current_heap_size: ${message}`)
                promClient.mosquittoMetrics.heap_current_size.set(parseInt(message))
                break;
              case "$SYS/broker/load/connections/1min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_current_load_connections [1min]: ${message}`)
                promClient.mosquittoMetrics.load_connections.set({ frequency: "1min" }, parseInt(message))
                break;
              case "$SYS/broker/load/connections/5min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_current_load_connections [5min]: ${message}`)
                promClient.mosquittoMetrics.load_connections.set({ frequency: "5min" }, parseInt(message))
                break;
              case "$SYS/broker/load/connections/15min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_current_load_connections [15min]: ${message}`)
                promClient.mosquittoMetrics.load_connections.set({ frequency: "15min" }, parseInt(message))
                break;
              case "$SYS/broker/load/messages/received/1min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_messages_recieved [1min]: ${message}`)
                promClient.mosquittoMetrics.load_messages_recieved.set({ frequency: "1min" }, parseInt(message))
                break;
              case "$SYS/broker/load/messages/received/5min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_messages_recieved [5min]: ${message}`)
                promClient.mosquittoMetrics.load_messages_recieved.set({ frequency: "5min" }, parseInt(message))
                break;
              case "$SYS/broker/load/messages/received/15min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_messages_recieved [15min]: ${message}`)
                promClient.mosquittoMetrics.load_messages_recieved.set({ frequency: "15min" }, parseInt(message))
                break;
              case "$SYS/broker/load/messages/sent/1min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_messages_sent [1min]: ${message}`)
                promClient.mosquittoMetrics.load_messages_sent.set({ frequency: "1min" }, parseInt(message))
                break;
              case "$SYS/broker/load/messages/sent/5min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_messages_sent [5min]: ${message}`)
                promClient.mosquittoMetrics.load_messages_sent.set({ frequency: "5min" }, parseInt(message))
                break;
              case "$SYS/broker/load/messages/sent/15min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_messages_sent [15min]: ${message}`)
                promClient.mosquittoMetrics.load_messages_sent.set({ frequency: "15min" }, parseInt(message))
                break;
              case "$SYS/broker/load/publish/dropped/1min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_publish_dropped [1min]: ${message}`)
                promClient.mosquittoMetrics.load_publish_dropped.set({ frequency: "1min" }, parseInt(message))
                break;
              case "$SYS/broker/load/publish/dropped/5min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_publish_dropped [5min]: ${message}`)
                promClient.mosquittoMetrics.load_publish_dropped.set({ frequency: "5min" }, parseInt(message))
                break;
              case "$SYS/broker/load/publish/dropped/15min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_publish_dropped [15min]: ${message}`)
                promClient.mosquittoMetrics.load_publish_dropped.set({ frequency: "15min" }, parseInt(message))
                break;
              case "$SYS/broker/load/publish/received/1min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_publish_received [1min]: ${message}`)
                promClient.mosquittoMetrics.load_publish_received.set({ frequency: "1min" }, parseInt(message))
                break;
              case "$SYS/broker/load/publish/received/5min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_publish_received [5min]: ${message}`)
                promClient.mosquittoMetrics.load_publish_received.set({ frequency: "5min" }, parseInt(message))
                break;
              case "$SYS/broker/load/publish/received/15min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_publish_received [15min]: ${message}`)
                promClient.mosquittoMetrics.load_publish_received.set({ frequency: "15min" }, parseInt(message))
                break;
              case "$SYS/broker/load/publish/sent/1min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_publish_sent [1min]: ${message}`)
                promClient.mosquittoMetrics.load_publish_sent.set({ frequency: "1min" }, parseInt(message))
                break;
              case "$SYS/broker/load/publish/sent/5min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_publish_sent [5min]: ${message}`)
                promClient.mosquittoMetrics.load_publish_sent.set({ frequency: "5min" }, parseInt(message))
                break;
              case "$SYS/broker/load/publish/sent/15min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_publish_sent [15min]: ${message}`)
                promClient.mosquittoMetrics.load_publish_sent.set({ frequency: "15min" }, parseInt(message))
                break;
              case "$SYS/broker/load/sockets/1min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_sockets [1min]: ${message}`)
                promClient.mosquittoMetrics.load_sockets.set({ frequency: "1min" }, parseInt(message))
                break;
              case "$SYS/broker/load/sockets/5min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_sockets [5min]: ${message}`)
                promClient.mosquittoMetrics.load_sockets.set({ frequency: "5min" }, parseInt(message))
                break;
              case "$SYS/broker/load/sockets/15min":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_load_sockets [15min]: ${message}`)
                promClient.mosquittoMetrics.load_sockets.set({ frequency: "15min" }, parseInt(message))
                break;
              case "$SYS/broker/messages/inflight":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_messages_inflight: ${message}`)
                promClient.mosquittoMetrics.messages_inflight.set(parseInt(message))
                break;
              case "$SYS/broker/messages/received":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_messages_received: ${message}`)
                promClient.mosquittoMetrics.messages_received.set(parseInt(message))
                break;
              case "$SYS/broker/messages/sent":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_messages_sent: ${message}`)
                promClient.mosquittoMetrics.messages_sent.set(parseInt(message))
                break;
              case "$SYS/broker/publish/messages/dropped":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_publish_messages_dropped: ${message}`)
                promClient.mosquittoMetrics.publish_messages_dropped.set(parseInt(message))
                break;
              case "$SYS/broker/publish/messages/received":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_publish_messages_received: ${message}`)
                promClient.mosquittoMetrics.publish_messages_received.set(parseInt(message))
                break;
              case "$SYS/broker/publish/messages/sent":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_publish_messages_sent: ${message}`)
                promClient.mosquittoMetrics.publish_messages_sent.set(parseInt(message))
                break;
              case "$SYS/broker/retained messages/count":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_retained_message_count: ${message}`)
                promClient.mosquittoMetrics.retained_message_count.set(parseInt(message))
                break;
              case "$SYS/broker/store/messages/bytes":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_store_message_count: ${message}`)
                promClient.mosquittoMetrics.store_message_bytes.set(parseInt(message))
                break;
              case "$SYS/broker/subscriptions/count":
                console.log("Debug", `${new Date().toISOString()} -- Updating mosquitto_subscriptions_count: ${message}`)
                promClient.mosquittoMetrics.subscriptions_count.set(parseInt(message))
                break;









            }



          })
        }
        )
        client.on('error', (error) => {

          /**FIXME:
           * No se muestra por console el mensaje de error cuando no consigue conectar
           */
          //si no se ha podido conectar se aumenta el contador de intentos

          console.log("Error", `(${new Date().toISOString()}) --There has been an error trying to connect to MQTT Broker`);
          console.log(error)
          retryCounter++;


        })
      }
      else {
        console.log("Error", `(${new Date().toISOString()}) -- Number of connections tries to broker execeeded, the broker doesn't response.`);
        //Se envia una alarma mediante email de que el servicio dcliente mqtt no ha podido conectar al broker
        /**
         * TODO:
         * -- Crear funcion para enviar por email una alerta de que el cliente mqtt
         * no ha podido conectarse al broker
         */
      }

    }
    //Como en base de datos se está escribiendo cada 3 peticiones, 
    //establezco un contador para enviar a bbdd solo cada 3 peticiones

    //Una vez conectado, el cliente recibe el mensaje 


  }
}
