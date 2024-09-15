const router = require('express').Router();

const { getProgramms, createProgramm, deleteProgramm } = require('../controllers/programm');
const { validationRouterCreateProgramm, validationRouterDeleteProgramm } = require('../validations/validationRouter');

router.get('/programm', getProgramms);

router.post('/programm', validationRouterCreateProgramm, createProgramm);

// router.patch('/user/admin/:_id', validationRouterUpdateUserAdmin, updateUserProgramm);

router.delete('/programm/:_id', validationRouterDeleteProgramm, deleteProgramm);

module.exports = router;