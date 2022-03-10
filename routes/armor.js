import { Router } from "express";
import * as armorCtrl from '../controllers/armors.js'

const router = Router()

router.get('/new', armorCtrl.new)
router.post('/', armorCtrl.create)
router.delete("/:id", armorCtrl.delete)

export{
  router
}