const router = require('express').Router();

const {
  validationRouterCreateUserAdmin,
  validationRouterUpdateUserAdmin,
  validationRouterDeleteUserAdmin
} = require('../validations/validationRouter');

const { getUsers, createUser, updateUserProgramm, deleteUserAdmin } = require('../controllers/usersAdmin');

router.get('/user/admin', getUsers);

router.post('/user/admin', validationRouterCreateUserAdmin, createUser);

router.patch('/user/admin/:_id', validationRouterUpdateUserAdmin, updateUserProgramm);

router.delete('/user/admin/:_id', validationRouterDeleteUserAdmin, deleteUserAdmin);

module.exports = router;
