const { ObjectId } = require('mongodb');
const mongoClient = require('./mongoConnect');

const UNEXPECTED_MSG = '<br><a href="/">메인 페이지로 이동</a>';

const getAllArticles = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const borad = client.db('kdt5').collection('board');

    const allArticleCursor = borad.find({}); // 전체 객체를 가져가겠다
    const ARTICLE = await allArticleCursor.toArray();

    res.render('db_board', {
      ARTICLE,
      articleCounts: ARTICLE.length,
      userId: req.session.userId,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message + UNEXPECTED_MSG);
  }
};

const writeArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const borad = client.db('kdt5').collection('board');

    const newArticle = {
      USERID: req.session.userId,
      TITLE: req.body.title,
      CONTENT: req.body.content,
    };
    await borad.insertOne(newArticle);
    res.redirect('/dbBoard');
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message + UNEXPECTED_MSG);
  }
};
const getArticle = async (req, res) => {
  try {
    const client = await mongoClient.connect();
    const borad = client.db('kdt5').collection('board');

    const selectedArticle = await borad.findOne({
      _id: ObjectId(req.params.id),
    });
  } catch (error) {
    console.error(err);
    res.status(500).send(err.message + UNEXPECTED_MSG);
  }
};
module.exports = { getAllArticles, writeArticle, getArticle };

// const boardDB = {
//   // 모든 게시글 가져오기
//   getAllArticles: (cb) => {
//     connection.query('SELECT * FROM mydb.board', (err, data) => {
//       if (err) throw err;
//       console.log(data);
//       cb(data);
//     });
//   },

//   // 게시글 추가하기
//   writeArticle: (newArticle, cb) => {
//     connection.query(
//       `INSERT INTO mydb.board (USERID, TITLE, CONTENT) values ('${newArticle.userId}','${newArticle.title}', '${newArticle.content}');`,
//       (err, data) => {
//         if (err) throw err;
//         cb(data);
//       },
//     );
//   },

//   // 특정 ID 값을 가지는 게시글 찾기
//   getArticle: (id, cb) => {
//     connection.query(
//       `SELECT * FROM mydb.board WHERE ID_PK = ${id};`,
//       (err, data) => {
//         if (err) throw err;
//         cb(data);
//       },
//     );
//   },

//   // 특정 ID를 가지는 게시글을 수정하는 컨트롤러
//   modifyArticle: (id, modifyArticle, cb) => {
//     connection.query(
//       `UPDATE mydb.board SET TITLE = '${modifyArticle.title}', CONTENT = '${modifyArticle.content}' WHERE ID_PK =${id};`,
//       (err, data) => {
//         if (err) throw err;
//         cb(data);
//       },
//     );
//   },

//   // 게시글 삭제 컨트롤러
//   deleteArticle: (id, cb) => {
//     connection.query(
//       `DELETE FROM mydb.board WHERE ID_PK = ${id}`,
//       (err, data) => {
//         if (err) throw err;
//         cb(data);
//       },
//     );
//   },
// };

// module.exports = boardDB;
