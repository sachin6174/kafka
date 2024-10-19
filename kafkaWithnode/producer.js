const kafka = require('kafka-node');

// Set up the Kafka client and producer
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new kafka.Producer(client);

producer.on('ready', () => {
    const message = { message: 'Hello Kafka from Node.js' };

    // Define the payload
    const payloads = [
        { topic: 'test-topic', messages: JSON.stringify(message) }
    ];

    // Send the message to Kafka
    producer.send(payloads, (err, data) => {
        if (err) {
            console.error('Error sending message:', err);
        } else {
            console.log('Message sent:', data);
        }
    });
});

producer.on('error', (err) => {
    console.error('Producer error:', err);
});
