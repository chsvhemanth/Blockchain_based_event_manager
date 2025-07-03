import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import eventRoutes from './routes/eventRoutes';

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI!).then(() => {
  console.log('MongoDB connected');
});

app.use('/api/events', eventRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
