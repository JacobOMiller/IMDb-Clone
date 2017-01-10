import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

export interface IMovie extends mongoose.Document {
  title: string,
  director: string,
  picture: string,
  rating: number
}

let MovieSchema = new Schema({
  title: String,
  director: String,
  picture: String,
  rating: Number
});

export const Movie = mongoose.model<IMovie>('Movie', MovieSchema);
