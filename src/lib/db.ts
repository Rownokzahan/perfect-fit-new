import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) throw new Error("MONGODB_URI not set in environment");

const MONGODB_DB = process.env.MONGODB_DB!;
if (!MONGODB_DB) throw new Error("MONGODB_DB not set in environment");

const globalWithMongoose = global as typeof global & {
  mongoose?: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
};

if (!globalWithMongoose.mongoose) {
  globalWithMongoose.mongoose = { conn: null, promise: null };
}

const cached = globalWithMongoose.mongoose;

// Connect to Mongoose
export const connectToDatabase = async (): Promise<Mongoose> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: MONGODB_DB,
      })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;

  console.log("Connected DB:", cached.conn.connection.db?.databaseName);
  return cached.conn;
};

// Get raw MongoClient for Better Auth
export const getClient = async (): Promise<mongoose.mongo.Db> => {
  const conn = await connectToDatabase();
  return conn.connection.getClient().db(MONGODB_DB);
};
