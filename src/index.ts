import express from 'express';
import redisClient from './redis';

const app = express();
const port = 3000;
const host = '0.0.0.0';

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/store/:key', async (req, res) => {
  const { key } = req.params;
  const value = req.query;
  await redisClient.setAsync(key, JSON.stringify(value));
  return res.send('Success');
});

app.get('/:key', async (req, res) => {
  const { key } = req.params;
  const rawData = await redisClient.getAsync(key);
  return res.json(JSON.parse(rawData));
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening at http://${host}:${port}`));
