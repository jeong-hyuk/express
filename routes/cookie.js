const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('cookie');
});

router.get('/cook', (req, res) => {
  // 쿠키 발행 코드 작성하기!
  res.cookie('alert', true, {
    maxAge: 1000 * 5,
  });
  res.status(200);
  res.json('쿠키 굽기 성공');
});

module.exports = router;
