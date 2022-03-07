import { Router } from "express";
import * as weaponsCtrl from '../controllers/weapons.js'
import { isLoggedIn } from "../middleware/middleware.js";
const router = Router()


//GET localhost3000: /weapons
router.get('/', weaponsCtrl.index)
//GET-localhost:3000/:id
router.get('/:id', weaponsCtrl.show) 

//POST localhost:3000/weapons   add is logged in once testing is complete
router.post('/', weaponsCtrl.create)

//DELETE - localhost:3000/weapons/:id
router.delete('/:id', weaponsCtrl.delete)

export{
    router
  }
