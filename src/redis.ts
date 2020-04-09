import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient(process.env.REDIS_URL);

/* eslint-disable no-console */
client.on('connect', () => console.log('Connected to Redis'));
client.on('error', (err) => console.error(`Error Connecting to Redis ${err}`));
/* eslint-enable no-console */

export default {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
  keysAsync: promisify(client.keys).bind(client),
};
