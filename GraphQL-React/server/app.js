import express from 'express';
// import { createHandler } from 'graphql-http/lib/use/express';
import { createYoga } from 'graphql-yoga';
import mongoose from 'mongoose';
import { schema } from './schema/schema.js';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

const corsOptions = {
  origin: ['http://localhost:3000/', 'http://localhost:3001/'],
  credentials: true,
};
app.use(cors(corsOptions));

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.vre2xqk.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_URL);
mongoose.connection.once('open', () => {
  console.log('Connected to DB');
});

const yoga = createYoga({
  schema,
  graphiql: true,
  cors: false,
});

app.use('/graphql', yoga);

app.listen(3001, () => {
  console.log('Server is running on Port 3001');
});
