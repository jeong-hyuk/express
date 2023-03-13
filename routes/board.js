const express = require('express');
const { route } = require('.');

const router = express.Router();

const ARTICLE = [
  {
    title: 'title1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam dolorum, iure assumenda neque facere modi excepturi corrupti beatae ab doloremque rerum perferendis explicabo magni aut blanditiis eum saepe quasi!',
  },
  {
    title: 'title2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam dolorum, iure assumenda neque facere modi excepturi corrupti beatae ab doloremque rerum perferendis explicabo magni aut blanditiis eum saepe quasi!',
  },
];
// localhost:4000/board/
// 글 목록 보여주기
router.get('/', (req, res) => {
  res.render('board', { ARTICLE: ARTICLE, articleCounts: ARTICLE.length });
});

// 글 쓰기 모드로 이동하기
router.get('/write', (req, res) => {
  res.render('board_write');
});

// 글 추가
router.post('/write', (req, res) => {
  if (req.body.title && req.body.content) {
    const newBoard = {
      title: req.body.title,
      content: req.body.content,
    };
    ARTICLE.push(newBoard);

    res.redirect('/board');
  } else {
    const err = new Error('폼 입력 확인하세요');
    err.statusCode = 404;
    throw err;
  }
});

// 글 수정
router.get('/modify/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex((article) => {
    req.params.title === article.title;
    return req.params.title === article.title;
  });
  const selectedArticle = ARTICLE[arrIndex];
  res.render('board_modify', { selectedArticle });
});
router.post('/modify/:title', (req, res) => {
  if (req.body.title && req.body.content) {
    const arrIndex = ARTICLE.findIndex((article) => {
      article.title === req.params.title;
      return article.title === req.params.title;
    });
    ARTICLE[arrIndex].title = req.body.title;
    ARTICLE[arrIndex].content = req.body.content;
    res.redirect('/board');
  } else {
    const err = new Error('폼 입력 확인하세요');
    err.statusCode = 404;
    throw err;
  }
});

// 글 삭제
router.delete('/delete/:title', (req, res) => {
  const arrIndex = ARTICLE.findIndex((article) => {
    article.title === req.params.title;
    return article.title === req.params.title;
  });
  ARTICLE.splice(arrIndex, 1);
  res.send('삭제 완료');
});
module.exports = router;
