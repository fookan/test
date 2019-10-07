const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  console.log('**** GET');
  res.render('detail', {});
});

router.post('/', (req, res) => {
  console.log('*** POST');
  console.log(req.boy);
  res.render('detail', {});
});

module.exports = router;
