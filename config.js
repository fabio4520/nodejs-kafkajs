const { Kafka, logLevel } = require('kafkajs');

// kafka client
// const kafka = new Kafka({
//   clientId: 'my-app-fabio',
//   brokers: ['localhost:9092'],
//   connectionTimeout: 1000 * 60, //time in ms (default 1000)
//   requestTimeout: 25000, //time in ms (default 30000)
//   retry: {
//     initialRetryTime: 100, //time in ms (default 100)
//     retries: 8 //default 5
//   },
//   logLevel: logLevel.INFO
//   // logLevel: logLevel.DEBUG
//   // logLevel: logLevel.NOTHING
// });

// kafka.logger().info('KafkaJS instantiated');

// module.exports = kafka;

class KafkaConfig {
  constructor() {
    this.kafka = new Kafka({
      clientId: 'my-app-fabio',
      brokers: ['localhost:9092'],
      connectionTimeout: 1000 * 60, //time in ms (default 1000)
      requestTimeout: 25000, //time in ms (default 30000)
      retry: {
        initialRetryTime: 100, //time in ms (default 100)
        retries: 8 //default 5
      },
      logLevel: logLevel.INFO
      // logLevel: logLevel.DEBUG
      // logLevel: logLevel.NOTHING
    });
    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: 'test-group' });
  }

  async produce(topic, messages) {
    try {
      await this.producer.connect();
      await this.producer.send({
        topic,
        messages
      });
    } catch (error) {
      console.log(error);
    } finally {
      await this.producer.disconnect();
    }
  }

  async consume(topic, callback) {
    try {
      await this.consumer.connect();
      await this.consumer.subscribe({ topic: topic, fromBeginning: true });
      await this.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          callback(message.value.toString());
        }
      });
    } catch (error) {
      
    }
  }
}

module.exports = KafkaConfig;