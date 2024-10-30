const { MongoClient } = require("mongodb");


const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/HiperpersonalizacaoMarketing";

const connectDB = async () => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();
    return client.db();
};

module.exports = connectDB;


