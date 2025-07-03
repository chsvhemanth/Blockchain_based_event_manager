import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  ipfsCID: String,
  date: Date,
  creatorWallet: String,
});

export default mongoose.model('Event', EventSchema);
