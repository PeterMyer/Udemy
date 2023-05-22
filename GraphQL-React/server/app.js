import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import mongoose from 'mongoose';
import { schema } from './schema/schema.js';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.vre2xqk.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_URL);
mongoose.connection.once('open', () => {
  console.log('Connected to DB');
});

app.all('/graphql', createHandler({ schema }));

app.listen(3001, () => {
  console.log('Server is running on Port 3001');
});
