import { Router } from "express";
import { getDetails, userRegister } from "../controllers/user.controllers.js";

const router = Router();

router.route('/register').post(userRegister)
router.route('/getDetails').get(getDetails)

export default router