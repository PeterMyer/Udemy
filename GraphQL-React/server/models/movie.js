import mongoose, { Schema } from 'mongoose';

const movieSchema = new Schema({
  name: String,
  genre: String,
  directorId: String,
});

const movieModel = new mongoose.model('Movie', movieSchema);

export { movieModel as Movie };
