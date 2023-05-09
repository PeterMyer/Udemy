import mongoose, { Schema } from 'mongoose';

const Schema = mongoose.Schema;

const directorSchema = new Schema({
  name: String,
  age: Number,
});

export { directorSchema as Director };
