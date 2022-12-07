import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router()

router.get('/',indexCtrl.memberCtrl.findAll)
router.get('/:id',indexCtrl.memberCtrl.findOne)


export default router