const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://jack11500808:ne42170808~@cluster0.odkhywu.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// insertOne
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertOne(
//       {
//         name: 'pororo',
//         age: 5,
//       },
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//       },
//     );
//   });
// });

// insertMany
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);
//       },
//     );
//   });
// });

// // deleteMany
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         test.deleteMany(
//           { age: { $gte: 5 } },
//           (deleteManyErr, deleteManyResult) => {
//             if (deleteManyErr) throw deleteManyErr;
//             console.log(deleteManyResult);
//           },
//         );
//         // client.close();
//       },
//     );
//   });
// });

// // update query
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         test.updateMany(
//           { age: { $gte: 5 } },
//           { $set: { name: '5살 이상인 친구들' } },
//           (updateErr, updateResult) => {
//             if (updateErr) throw updateErr;
//             console.log(updateResult);
//           },
//         );
//         // client.close();
//       },
//     );
//   });
// });

// // find query
// client.connect((err) => {
//   const test = client.db('kdt5').collection('test');
//   test.deleteMany({}, (deleteErr, deleteResult) => {
//     if (deleteErr) throw deleteErr;
//     console.log(deleteResult);

//     test.insertMany(
//       [
//         { name: 'pororo', age: 5 },
//         { name: 'loopy', age: 6 },
//         { name: 'crong', age: 4 },
//       ],
//       (insertErr, insertResult) => {
//         if (insertErr) throw insertErr;
//         console.log(insertResult);

//         const findCursor = test.find({ name: 'loopy' });
//         console.log(findCursor);
//         findCursor.toArray((toArrErr, toArrData) => {
//           if (toArrErr) throw toArrErr;
//           console.log(toArrData);
//         });
//         // client.close();
//       },
//     );
//   });
// });

client.connect((err) => {
  const member = client.db('kdt5').collection('member');
  member.deleteMany({}, (deleteErr, deleteResult) => {
    if (deleteErr) throw deleteErr;
    console.log(deleteResult);

    member.insertMany(
      [
        { name: '정혁', age: 26 },
        { name: '유림', age: 27 },
        { name: '찬호', age: 26 },
        { name: '민정', age: 25 },
        { name: '민선', age: 29 },
      ],
      (insertErr, insertResult) => {
        if (insertErr) throw insertErr;
        member.insertOne(
          { name: '성희', age: 27 },
          (insertOneErr, insertOneResult) => {
            if (insertOneErr) throw insertOneErr;
            member.deleteOne(
              { name: '민선' },
              (deleteOneErr, deleteOneResult) => {
                if (deleteOneErr) throw deleteOneErr;
                member.updateOne(
                  { name: '찬호' },
                  { $set: { name: '호준', age: 29 } },
                  (updateErr, updateResult) => {
                    if (updateErr) throw updateErr;
                    const findCursor = member.find({ age: { $gte: 27 } });
                    findCursor.toArray((toArrErr, toArrData) => {
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
