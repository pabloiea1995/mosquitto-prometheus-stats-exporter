
const client = require('prom-client');
module.exports.register = client.register;

//Metrics definitions

module.exports.testCounter =  counter = new client.Counter({
  name: 'mosquitto_test_counter',
  help: 'metric_help',
  labelNames: ["url"]
});

module.exports.mosquittoMetrics = {

	bytes_recieved: new client.Gauge({
		name: "mosquitto_total_bytes_received",
		help: "The total number of bytes received since the broker started."
	}),

	bytes_sent: new client.Gauge({
		name: "mosquitto_total_bytes_sent",
		help: "The total number of bytes sent since the broker started."
	}),

	clients_connected: new client.Gauge({
		name: "mosquitto_current_clients_connected",
		help: "The number of currently connected clients."
	}),

	clients_expired: new client.Gauge({
		name: "mosquitto_current_clients_expired",
		help: "The number of disconnected persistent clients that have been expired and removed through the persistent_client_expiration option."
	}),
	clients_disconnected: new client.Gauge({
		name: "mosquitto_current_clients_disconnected",
		help: "The total number of persistent clients (with clean session disabled) that are registered at the broker but are currently disconnected."
	}),
	clients_maximum: new client.Gauge({
		name: "mosquitto_current_clients_maximum",
		help: "The maximum number of clients that have been connected to the broker at the same time."
	}),
	clients_total: new client.Gauge({
		name: "mosquitto_current_clients_total",
		help: "The total number of active and inactive clients currently connected and registered on the broker."
	}),
	heap_current_size: new client.Gauge({
		name: "mosquitto_current_heap_size",
		help: "The current size of the heap memory in use by mosquitto. Note that this topic may be unavailable depending on compile time options."
	}),
	load_connections: new client.Gauge({
		name: "mosquitto_current_load_connections",
		help: "The moving average of the number of CONNECT packets received by the broker over different time intervals.",
		labelNames: ["frequency"]
	}),
	load_messages_recieved: new client.Gauge({
		name: "mosquitto_load_messages_recieved",
		help: "The moving average of the number of all types of MQTT messages received by the broker over different time intervals",
		labelNames: ["frequency"]
	}),
	load_messages_sent: new client.Gauge({
		name: "mosquitto_load_messages_sent",
		help: "The moving average of the number of all types of MQTT messages sent by the broker over different time intervals",
		labelNames: ["frequency"]
	}),
	load_publish_dropped: new client.Gauge({
		name: "mosquitto_load_publish_dropped",
		help: "The moving average of the number of publish messages dropped by the broker over different time intervals. This shows the rate at which durable clients that are disconnected are losing messages",
		labelNames: ["frequency"]
	}),
	load_publish_received: new client.Gauge({
		name: "mosquitto_load_publish_received",
		help: "The moving average of the number of publish messages received by the broker over different time intervals",
		labelNames: ["frequency"]
	}),
	load_publish_sent: new client.Gauge({
		name: "mosquitto_load_publish_sent",
		help: "The moving average of the number of publish messages sent by the broker over different time intervals",
		labelNames: ["frequency"]
	}),
	load_sockets: new client.Gauge({
		name: "mosquitto_load_sockets",
		help: "The moving average of the number of socket connections opened to the broker over different time intervals.",
		labelNames: ["frequency"]
	}),
	messages_inflight: new client.Gauge({
		name: "mosquitto_messages_inflight",
		help: "The number of messages with QoS>0 that are awaiting acknowledgments."
		
	}),
	messages_received: new client.Gauge({
		name: "mosquitto_messages_received",
		help: "The total number of messages of any type received since the broker started."
		
	}),
	messages_sent: new client.Gauge({
		name: "mosquitto_messages_sent",
		help: "The total number of messages of any type sent since the broker started."
		
	}),
	publish_messages_dropped: new client.Gauge({
		name: "mosquitto_publish_messages_dropped",
		help: "The total number of publish messages that have been dropped due to inflight/queuing limits"
		
	}),
	publish_messages_received: new client.Gauge({
		name: "mosquitto_publish_messages_received",
		help: "The total number of PUBLISH messages received since the broker started."
		
	}),
	publish_messages_sent: new client.Gauge({
		name: "mosquitto_publish_messages_sent",
		help: "The total number of PUBLISH messages sent since the broker started."
		
	}),
	retained_message_count: new client.Gauge({
		name: "mosquitto_retained_message_count",
		help: "The total number of retained messages active on the broker."
		
	}),
	store_message_count: new client.Gauge({
		name: "mosquitto_store_message_count",
		help: "The total number of retained messages active on the broker.This includes retained messages and messages queued for durable clients."
		
	}),
	store_message_bytes: new client.Gauge({
		name: "mosquitto_store_message_bytes",
		help: "The total number of retained messages active on the broker.This includes retained messages and messages queued for durable clients."
	}),
	subscriptions_count: new client.Gauge({
		name: "mosquitto_subscriptions_count",
		help: "The total number of subscriptions active on the broker"
	})







}

