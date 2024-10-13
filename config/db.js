import mongoose from "mongoose";

const connection = async (connectionString) => {
  if (!connectionString) {
    console.error("No connection String");
    process.exit(1);
  } else {
    try {
      const connection = await mongoose.connect(connectionString);
      console.log(`Connected to database : ${connectionString}`);
      return connectionString;
    } catch (error) {
      console.error("Could not connect to DB", error);
      process.exit(1);
    }
  }
};

export default connection
