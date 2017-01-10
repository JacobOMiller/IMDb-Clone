import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

export interface IBoxer extends mongoose.Document {
  name: string,
  age: number,
  weight: number,
  email: string
}

let BoxerSchema = new Schema({
  name: String,
  age: Number,
  weight: Number,
  email: String
});

export const Boxer = mongoose.model<IBoxer>('Boxer', BoxerSchema);
