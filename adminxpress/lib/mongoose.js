import mongoose from "mongoose";

//Function connects Mongoose to the MongoDB
/**
 * Connects Mongoose to a MongoDB database.
 * @returns {Promise} A promise that resolves to the mongoose.connection object if it is already connected,
 * or the result of the mongoose.connect() method if it needs to establish a new connection.
 */
export function mongooseConnect() {
    if (mongoose.connection.readyState === 1) {
        // If already connected, return the mongoose.connection object as a promise
        return mongoose.connection.asPromise();
    } else {
        // If not connected, retrieve the MongoDB URI from the MONGODB_URI environment variable
        const uri = process.env.MONGODB_URI;
        // Connect Mongoose to the MongoDB database using the retrieved URI
        return mongoose.connect(uri);
    }
}
