const KafkaConfig = require('./config');
const crypto = require('crypto');

const sendMessageToKafka = async (req, res) => {
  try {
    const { message } = req.body;
    const kafkaConfig = new KafkaConfig();
    const messages = [
      {
        key: crypto.randomBytes(16).toString('hex'),
        value: message
      }
    ];
    await kafkaConfig.produce("simple-topic", messages);
    res.status(200).json({
      status: 'success',
      message: 'Message sent to Kafka'
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Error sending message to Kafka', error: error });
  }
}

const consoleMessage = () => {
  const kafkaConfig = new KafkaConfig();
  kafkaConfig.consume("simple-topic", (message) => {
    console.log({
      key: message.key.toString(),
      value: message.value.toString(),
    });
  });
}

module.exports = {
  sendMessageToKafka,
  consoleMessage
}