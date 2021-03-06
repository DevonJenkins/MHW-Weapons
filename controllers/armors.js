import { Armor } from "../models/armor.js";

function newArmor(req, res){
  Armor.find({})
  .then(armor =>{ 
    res.render('armors/new', {
      armor,
      title: "Add Armor"
    })
  })
  .catch(err => {
    console.log("error")
    res.redirect("/armors/new")
  })
  }

function create(req, res){
  req.body.owner = req.user.profile._id
  Armor.create(req.body)
  .then(armor => {
    res.redirect('/armors/new')
  })
  .catch(err => {
    console.log('error')
    res.redirect('/armors/new')
  })
}

function deleteArmor(req, res) {
  console.log('hitting controller')
  Armor.findById(req.params.id)
  
  .then(armor =>{
    if (armor.owner.equals(req.user.profile._id)){
    armor.delete()
    .then(() => {
      res.redirect('/armors/new')
    })
  } else {
    throw new Error ("unauthorized access")
  }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/armors/new')
  })
  }



export{
  newArmor as new,
  create,
  deleteArmor as delete
}