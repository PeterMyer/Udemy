import mongoose, { Schema } from 'mongoose';

const directorSchema = new Schema({
  name: String,
  age: Number,
});

const directorModel = new mongoose.model('Director', directorSchema);
export { directorModel as Director };
