const router = require('express').Router();
const { login } = require('../controllers/auth');
const { validationRouterLogin } = require('../validations/validationRouter');

router.post('/signin', validationRouterLogin, login);

module.exports = router;
