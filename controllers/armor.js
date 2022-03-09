import { Armor } from "../models/armor.js";

function newArmor(req, res){
  Armor.find({})
  .then(armor =>{ 
    res.render('armors/new', {
      armor,
      title: "add armor"
    })
  })
  .catch(err => {
    console.log("error")
    res.redirect("/armors/new")
  })
  }

function create(req, res){
  console.log('hitting controller')
  Armor.create(req.body)
  .then(armor => {
    res.redirect('/armors/new')
  })
  .catch(err => {
    console.log('error')
    res.redirect('/armors/new')
  })
}


export{
  newArmor as new,
  create
}