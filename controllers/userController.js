const mongooseConnect = require('./mongooseConnect');
mongooseConnect();
const User = require('../models/user');

const UNEXPECTED_MSG =
  '알수 없는 문제 발생<br><a href="/register">회원 가입으로 이동</a>';
const UNEXPECTED_MSG_LOGIN =
  '비밀번호가 틀렸습니다.<br><a href="/login">로그인으로 이동</a>';
const DUPLICATED_MSG =
  '동일한 ID를 가진 회원이 존재합니다.<br><a href="/register">회원 가입으로 이동</a>';

const SUCCESS_MSG = '회원 가입 성공<br><a href="/login">로그인으로 이동</a>';

const LOGIN_NOT_REGISTERED_MSG =
  '입력하신 ID를 가진 회원이 존재하지 않습니다.<br><a href="/register">회원 가입으로 이동</a>';

const LOGIN_WRONG_PASSWORD_MSG =
  '비밀번호가 틀렸습니다.<br><a href="/login">로그인으로 이동</a>';
// 회원가입
const registerUser = async (req, res) => {
  try {
    // const duplicatedUser = await User.findOne({ id: req.body.id });
    // if (duplicatedUser) return res.status(400).send(DUPLICATED_MSG);
    await User.create(req.body);
    res.status(200).send(SUCCESS_MSG);
  } catch (err) {
    console.error(err);
    res.status(500).send(UNEXPECTED_MSG);
  }
};

const loginUser = async (req, res) => {
  try {
    // 아이디와 비번이 동일한게 있는것을 찾는 코드.
    const logUser = await User.findOne({
      id: req.body.id,
    });
    // 만약 아이디 비번이 동일한것이 없으면 에리 띄워줌.
    if (!logUser) return res.status(400).send(LOGIN_NOT_REGISTERED_MSG);
    if (logUser.password !== req.body.password)
      return res.status.send(LOGIN_WRONG_PASSWORD_MSG);
    // 그게아니라면
    req.session.login = true;
    req.session.userId = req.body.id;

    // 로그인 쿠키 발행
    res.cookie('user', req.body.id, {
      maxAge: 3000 * 10,
      httpOnly: true,
      signed: true,
    });
    res.status(200);
    res.redirect('/dbBoard');
  } catch (err) {
    console.error(err);
    res.status(500).send(UNEXPECTED_MSG_LOGIN);
  }
};

module.exports = { registerUser, loginUser, mongooseConnect };

// 리펙토링 전 코드
// const userDB = {
//   // 중복 회원 찾기
//   userCheck: async (userId) => {
//     try {
//       const client = await mongoClient.connect();
//       const user = client.db('kdt5').collection('user');
//       const findUser = await user.findOne({ id: userId });
//       return findUser;
//     } catch (err) {
//       console.error(err);
//     }
//   },

//   // 회원 가입 하기
//   registerUser: async (newUser) => {
//     try {
//       const client = await mongoClient.connect();
//       const user = client.db('kdt5').collection('user');

//       await user.insertOne(newUser);
//       return true;
//     } catch (err) {
//       console.error(err);
//     }
//   },
// };

// module.exports = userDB;
