import { Router } from "express";
import * as armorCtrl from '../controllers/armor.js'

const router = Router()

router.get('/new', armorCtrl.new)

router.post('/', armorCtrl.create)

export{
  router
}