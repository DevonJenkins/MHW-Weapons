import { Armor } from "../models/armor.js";
import { Weapon } from "../models/weapon.js";

function index(req, res){
  Weapon.find({})
  .then(weapons =>{ 
    res.render('weapons/index', {
      weapons,
      title: "Weapons"
    })
  })
  .catch(err => {
    console.log("error")
    res.redirect("/weapons")
  })
}

function create(req, res){
  req.body.owner = req.user.profile._id

  Weapon.create(req.body)
  .then(weapon => {``
    res.redirect("/weapons")
  })
  .catch(err => {
    console.log('error')
    res.redirect("/weapons")
  })
}

function show(req, res){
  Weapon.findById(req.params.id)
  .populate("owner")
  .populate('armors')
  .then( weapon => {
    Armor.find({_id: {$nin: weapon.armors}}).then( armors =>{ 

      res.render('weapons/show',{
        weapon,
        title: "Weapon Details",
        armors
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/weapons')
  })
}

function deleteWeapon(req, res){

  Weapon.findById(req.params.id)
  .then(weapon => {
      if (weapon.owner.equals(req.user.profile._id)){
      weapon.delete()
      .then(() => {
        res.redirect("/weapons")
      })
      }else{
        throw new Error ("UNAUTHORIZED ACCESS")
      }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/weapons')
  })
}

function edit(req, res){
  Weapon.findById(req.params.id)
  .then(weapon => {
    res.render("weapons/edit",{
      weapon,
      title: "weapon edit",
      
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/weapons')
  })
}

function update(req, res){
  Weapon.findById(req.params.id)
  .then(weapon => {
    if (weapon.owner.equals(req.user.profile._id)){
      weapon.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/weapons/${req.params.id}`)
      })
    }else {
      throw new Error("NOT AUTHORIZED")
    }}
  )
  .catch(err => {
    console.log(err)
    res.redirect('/weapons')
  })
}

function addArmor(req, res) {
  Weapon.findById(req.params.id)
  .then(weapon => {
    weapon.armors.push(req.body.armorId)
    weapon.save()
    res.redirect(`/weapons/${req.params.id}`)
  })
}


export {
  index,
  create,
  show,
  edit,
  deleteWeapon as delete,
  update,
  addArmor

}