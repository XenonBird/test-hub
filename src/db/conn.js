import mongoose from 'mongoose';

// MongoDB connection URI
const mongoURI = process.env.DB_URI;

let connectionAttempts = 0;

// Function to connect to the database if not already connected
export async function connectToDatabase() {
  if (connectionAttempts < 3 && mongoose.connection.readyState === 0) {
    connectionAttempts++;

    await mongoose.connect(mongoURI, {
      useUnifiedTopology: true,
    });

    // Connection successful
    mongoose.connection.on('connected', () => {
      console.log('🟢 Connected to MongoDB');
    });

    // Connection error
    mongoose.connection.on('error', (err) => {
      console.error('🔴 Failed to connect to MongoDB:', err);
    });

    // Connection disconnected
    mongoose.connection.on('disconnected', () => {
      console.log('🔵 Disconnected from MongoDB');
      // Reconnect
      connectToDatabase();
    });
  } else {
    if (connectionAttempts >= 3) {
      console.log(
        '🔴 Maximum connection attempts reached. Unable to connect to MongoDB.'
      );
    } else {
      console.log('🟢 Already connected to MongoDB');
    }
  }
}

// Call the function to connect to the database
// connectToDatabase();
