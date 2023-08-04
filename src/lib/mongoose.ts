import mongoose from 'mongoose';
import debug from 'debug';

// const debug = require('debug')('yay');
const error = require('debug')('error');

// connecting to database
const connectDB = async () => {
  const connectionUrl = process.env.MONGO_DB_URL;

  console.log('connect DB : ', connectionUrl)


  try {
    const mongooseInstance = await mongoose.connect(connectionUrl as any);
    console.log(
      `  🛢️ Database connected successfully - models : ${
        Object.keys(mongooseInstance.models).length
      } : ${Object.keys(mongooseInstance.models).join(', ')}`,
    );
    debug('yay')('Database connected successfully models  ');

    return mongooseInstance;
  } catch (err) {
    console.error('  ❌ Database FAIL to connect', err);
    error(err);
    process.exit(0);
  }
};

export default connectDB;
