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
  //req.body.owner = req.user.profile._id

  Weapon.create(req.body)
  .then(weapon => {
    res.redirect("/weapons")
  })
  .catch(err => {
    console.log('error')
    res.redirect("/weapons")
  })
}

function show(req, res){
  
  Weapon.findById(req.params.id)
  //.populate("owner")
  .then( weapon => {
    res.render('weapons/show',{
      weapon,
      title: "weapon details"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/weapons')
  })
}

function deleteWeapon(req, res){
  console.log('weapons delete')

  Weapon.findById(req.params.id)
  .then(weapon => {
    // if (weapon.owner.equals(req.user.profile._id)){
      weapon.delete()
      .then(() => {
        res.redirect("/weapons")
      })
    // }else{
    //   throw new Error ("UNAUTHORIZED ACCESS")
    // }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/weapons')
  })
}



export {
  index,
  create,
  show,
  deleteWeapon as delete,

}