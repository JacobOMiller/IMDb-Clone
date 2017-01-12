import * as mongoose from 'mongoose';
import Rating from './ratings';
let Schema = mongoose.Schema;

export interface IMovie extends mongoose.Document{
  title: string,
  director: string,
  picture: string,
  rating: number
}

let MovieSchema = new Schema({
  title: String,
  director: String,
  picture: String,
  rating:{type: Number, require: false, min:0, max:10, default:0}
});

export const Movie = mongoose.model<IMovie>('Movie', MovieSchema);
