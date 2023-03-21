const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://jack11500808:ne42170808~@cluster0.odkhywu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

client.connect((err) => {
  const member = client.db('kdt5').collection('member');
  member.deleteMany({}, (deleteManyErr, deleteManyResult) => {
    if (deleteManyErr) throw deleteManyErr;
    member.insertMany(
      [
        { name: '신상아', age: 24 },
        { name: '김호준', age: 29 },
        { name: '홍성범', age: 32 },
        { name: '구슬기', age: 30 },
      ],
      (insertManyErr, insertManyResult) => {
        if (insertManyErr) throw insertManyErr;
        member.insertOne(
          { name: '김정혁', age: 26 },
          (insertOneErr, insertOneResult) => {
            if (insertOneErr) throw insertOneErr;
            member.deleteOne(
              { name: '신상아' },
              (deleteOneErr, deleteOneResult) => {
                if (deleteOneErr) throw deleteOneErr;
                member.updateOne(
                  { name: '김정혁' },
                  { $set: { name: '신상아', age: 25 } },
                  (updateOneErr, updateOneResult) => {
                    if (updateOneErr) throw updateOneErr;

                    const oldCursor = member.find({ age: { $gte: 25 } });
                    oldCursor.toArray((toArrErr, toArrData) => {
                      if (toArrErr) throw toArrErr;
                      console.log(toArrData);
                    });
                  },
                );
              },
            );
          },
        );
      },
    );
  });
});
