import mongoose, { Schema } from 'mongoose';

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  genre: String,
  directorId: String,
});

export { movieSchema as Movie };
