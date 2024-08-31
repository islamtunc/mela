// Bismillahirahmanirahim



import { Schema, model } from 'mongoose';
// Schema
const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String
});

// `UserModel` will have `name: string`, etc.
const UserModel = mongoose.model('User', schema);

const doc = new UserModel({ name: 'test', email: 'test' });
doc.name; // string
doc.email; // string
doc.avatar; //