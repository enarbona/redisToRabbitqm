const dotenv = require('dotenv');
const redis = require('redis');

dotenv.config();

const subscriber = redis.createClient({
  host: process.env.REDISHOST,
  port: process.env.REDISTPORT
});

subscriber.on('outlook10', function(channel, message) {
  console.log(channel, message);
});

redisClient.on('connect', function() {
  console.log('Redis Server Conected');
});
