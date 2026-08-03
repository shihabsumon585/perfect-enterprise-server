import { Router} from "express";
import { authController } from "./auth.controller";



const router = Router();

router.post("/login", authController.authLogin)
router.post("/login", authController.authLogin)

export const authRoute = router;