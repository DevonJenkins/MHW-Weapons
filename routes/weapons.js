import { Router } from "express";
import * as weaponsCtrl from '../controllers/weapons.js'
import { isLoggedIn } from "../middleware/middleware.js";
const router = Router()


//GET localhost3000: /weapons
router.get('/', weaponsCtrl.index)
//GET-localhost:3000/weapons/:id
router.get('/:id', weaponsCtrl.show) 
// GET localhost:3000/weapons/:id/edit
router.get('/:id/edit', weaponsCtrl.edit)

//POST localhost:3000/weapons   add is logged in once testing is complete
router.post('/', weaponsCtrl.create)

//PUT-localhost3000/weapons/:id
router.put('/:id', weaponsCtrl.update)

//DELETE - localhost:3000/weapons/:id
router.delete('/:id', weaponsCtrl.delete)

router.post('/:id/armors', weaponsCtrl.addArmor)

export{
    router
  }
