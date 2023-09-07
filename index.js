const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { consoleMessage, sendMessageToKafka } = require('./controller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send', sendMessageToKafka);

consoleMessage();

app.listen(3000, () => {
  console.log('Server started on port 3000')
});

