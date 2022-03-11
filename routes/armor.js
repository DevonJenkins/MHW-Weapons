import { Router } from "express";
import * as armorCtrl from '../controllers/armors.js'
import { isLoggedIn } from "../middleware/middleware.js";


const router = Router()

router.get('/new', armorCtrl.new)
router.post('/', isLoggedIn, armorCtrl.create)
router.delete("/:id", isLoggedIn, armorCtrl.delete)

export{
  router
}