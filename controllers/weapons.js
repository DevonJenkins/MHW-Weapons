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
  console.log('weapons show')
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



export {
  index,
  create,
  show,

}