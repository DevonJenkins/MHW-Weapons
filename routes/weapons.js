import { Router } from "express";
import * as weaponsCtrl from '../controllers/weapons.js'
import { isLoggedIn } from "../middleware/middleware.js";
const router = Router()


//GET localhost3000: /weapons
router.get('/', weaponsCtrl.index)
  




export{
    router
  }
