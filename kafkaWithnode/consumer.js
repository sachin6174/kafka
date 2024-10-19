const kafka = require('kafka-node');

// Set up the Kafka client and consumer
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new kafka.Consumer(
    client,
    [{ topic: 'test-topic', partition: 0 }],
    { autoCommit: true }
);

consumer.on('message', (message) => {
    console.log('Received message:', message.value);
});

consumer.on('error', (err) => {
    console.error('Consumer error:', err);
});
