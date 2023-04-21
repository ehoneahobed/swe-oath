// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB Atlas');
// }).catch((error) => {
//   console.log('Error connecting to MongoDB Atlas: ', error);
// });

// const connectDB = mongoose.connection;

// connectDB.on('error', console.error.bind(console, 'MongoDB connection error:'));

// module.exports = connectDB;

const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);
  }
}

module.exports = connectDB;
