import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.post("/registrasi", indexCtrl.userCtrl.registrasi);
router.post("/login", indexCtrl.userCtrl.login);

export default router;