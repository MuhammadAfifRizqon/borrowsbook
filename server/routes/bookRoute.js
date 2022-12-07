import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router()

router.get('/',indexCtrl.bookCtrl.findAll)
router.get('/:id',indexCtrl.bookCtrl.findOne)
router.post('/',indexCtrl.bookCtrl.create)
router.put('/:id',indexCtrl.bookCtrl.update)
router.delete('/:id',indexCtrl.bookCtrl.deleted)

export default router