import app from './app.js';
import connectDB from './config/db.js';
import { PORT } from './config/utils.js';

const port = PORT || 8080;


//Connect to Mongodb
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log('MongoDB connection failed:', error);
  });
