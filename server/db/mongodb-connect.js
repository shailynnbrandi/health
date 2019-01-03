const {MongoClient} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/health', (err, client) => {
  if (err) {
    return console.log('DB status: not running');
  }
  console.log('OK');
  client.close();
});

module.exports = {};