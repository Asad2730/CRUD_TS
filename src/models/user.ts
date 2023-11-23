import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/user';


const UserSchema:Schema = new Schema({
    name:{type:String,require:true},
    email:{type:String,require:true}
})

export default mongoose.model<IUser>('User',UserSchema)