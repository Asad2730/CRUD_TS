import express from 'express';
import mongoose from 'mongoose';
import useRouter from './routes/user';

const app = express();

const startServer = async () => {
  try {
    await mongoose.connect('paste your url here');
    console.log('Connected to MongoDB');
    app.use(express.json());
    app.use('/api', useRouter);

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

startServer();
