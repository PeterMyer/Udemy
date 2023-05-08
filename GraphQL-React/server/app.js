const express = require('express');
import { createHandler } from 'graphql-http/lib/use/express';
const schema = require('./schema/schema');

const app = express();

app.all('/graphql', createHandler({ schema }));

app.listen(3000, () => {
  console.log('Server is running on Port 3000');
});
