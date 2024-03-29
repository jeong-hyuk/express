// 페키지 불러오는 파트
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();

// 서버 중요정보 파트
const app = express();
const { PORT } = process.env;

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('jack'));
app.use(
  session({
    secret: 'jack',
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

const mainRouter = require('./routes/index');
const userRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const dbRouter = require('./routes/db');
const dbBoardRouter = require('./routes/dbBoard');
const cookieRouter = require('./routes/cookie');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message);
});

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/board', boardRouter);
app.use('/db', dbRouter);
app.use('/dbBoard', dbBoardRouter);
app.use('/cookie', cookieRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => {
  res.send('express 실습');
});

// listen 메소드를 사용해서 최초 서버 실행
// 아무 기능 없는 서버
app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 실행 중 입니다.`);
});
