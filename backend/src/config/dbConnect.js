import mongoose from "mongoose";

mongoose.connect("mongodb+srv://murilo:123@mydb.rt3vvuy.mongodb.net/compass-keepalive");

let db = mongoose.connection;

export default db;