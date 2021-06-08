import { Router } from 'express'

const router = Router();

import * as userCtr from '../controller/user.controller'
const { checkToken } = require('../auth/validation_token');

router.get('/', checkToken,   userCtr.readAllUsers);
router.get('/:id', checkToken, userCtr.readUser);
router.delete('/:id', checkToken, userCtr.delUser);
router.post('/', checkToken, userCtr.createUser);
router.put('/:id', checkToken, userCtr.updateUser);


export default router;
//comit