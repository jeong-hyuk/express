// 메인 라우터
const express = require('express');

const router = express.Router();

// localhost:4000/
router.get('/', (req, res) => {
  res.render('index', { msg: '이 데이터는 백엔드가 보냈습니다' });
});

module.exports = router;
