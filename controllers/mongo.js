const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://jack11500808:ne42170808~@cluster0.odkhywu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const test = client.db('kdt5').collection('test');
  test.deleteMany({}, (deleteErr, deleteResult) => {
    if (deleteErr) throw deleteErr;
    console.log(deleteResult);
    test.insertOne(
      {
        name: 'jack',
        nickname: 'pig',
      },
      (insertErr, insertResult) => {
        console.log(insertResult);
        // client.close();
        const findCursor = test.find({});
        findCursor.toArray((err, data) => {
          console.log(data);
        });
      },
    );
  });
});
