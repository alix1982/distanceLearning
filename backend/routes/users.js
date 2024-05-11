const router = require('express').Router();
const { getUserMe, getDataMe } = require('../controllers/users');

router.get('/user/me', getUserMe);
router.get('/user/meData', getDataMe);

module.exports = router;
