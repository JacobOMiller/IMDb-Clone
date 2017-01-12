import * as mongoose from 'mongoose';

let Schema = mongoose.Schema;

export interface IRating extends mongoose.Document{
  movie:  mongoose.Types.ObjectId ,
  rating: number
}

let RatingsSchema = new Schema({
  movie: mongoose.Types.ObjectId ,
  rating:{type: Number, require: false, min:0, max:10, default:0}
})
export default mongoose.model<IRating>('Rating', RatingsSchema);
