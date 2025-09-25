import mongoose from "mongoose";


export const dbConnection = async  () => {
const uri = await process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI is not defined in the .env file!");
  }

  await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log("✅ Connected to database!");
    }).catch((err) => {
      console.error(`❌ Error connecting to database: ${err.message}`);
      throw new Error(`Database connection failed: ${err.message}`);
    });
    
};