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

// find query
client.connect((err) => {
  const test = client.db('kdt5').collection('test');
  test.deleteMany({}, (deleteErr, deleteResult) => {
    if (deleteErr) throw deleteErr;
    console.log(deleteResult);

    test.insertMany(
      [
        { name: 'pororo', age: 5 },
        { name: 'loopy', age: 6 },
        { name: 'crong', age: 4 },
      ],
      (insertErr, insertResult) => {
        if (insertErr) throw insertErr;
        console.log(insertResult);

        test.findOne({ name: 'loopy' }, (findErr, findData) => {
          if (findErr) throw findErr;
          console.log(findData);
        });
        // client.close();
      },
    );
  });
});
