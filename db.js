import mongoose from 'mongoose';
import 'dotenv/config';
const uri = process.env.MONGODB_URI;

let db;

export async function connect() {
  if (!db) {
    await mongoose.connect(uri);
    console.log('connection established!');
    // db = client.db('Cookbook')
  } else {
    console.log('nope');
  }
  return db;
}
export async function close() {
  await mongoose.connection.close();
}