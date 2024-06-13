const router = require('express').Router();
const { getUserMe, getDataMe, patchUserProgramm } = require('../controllers/users');
const { validationRouterUpdateProgramm } = require('../validations/validationRouter');

router.get('/user/me', getUserMe);
router.get('/user/meData', getDataMe);
router.patch('/user/updateProgramm/:id', validationRouterUpdateProgramm, patchUserProgramm);
// router.patch('/user/updateProgramm/:id', patchUserProgramm);

module.exports = router;
