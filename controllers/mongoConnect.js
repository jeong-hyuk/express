const { MongoClient, ServerApiVersion, Logger } = require('mongodb');
const uri =
  'mongodb+srv://jack11500808:ne42170808~@cluster0.odkhywu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
