// 메인 라우터
const express = require('express');

const router = express.Router();

// localhost:4000/users/ <- 이 슬러쉬임
router.get('/', (req, res) => {
  res.render('users', { user: '김정혁' });
});

module.exports = router;
