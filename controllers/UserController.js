const { Router } = require('express');

const router = Router();

router.post('/login', async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;

  //   1. body 의 email 로 DB 의 User 테이블에서 검색하여 결과를 받아옵니다.

  //   2. DB 에서 받아온 User 의 password 와 body 의 password 를 비교합니다.

  //   3. 일치하면 Session 테이블에 추가하고 응답으로 token 을 내려줍니다.

  res.json({
    token: '',
  });
});

module.exports = router;
