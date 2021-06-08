import { Router} from 'express'
const router = Router()
import * as authCtrl from '../controller/auth.controller'
router.post('/', authCtrl.login);
router.post('/signin/', authCtrl.signIn)

export default router;