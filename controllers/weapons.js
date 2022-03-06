import { Weapon } from "../models/weapon.js";

function index(req, res){
  console.log("hello index")
  Weapon.find({})
  .then(weapons =>{ 
    res.render('weapons/index', {
      weapons,
      title: "weapons"
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



export {
  index,
  create,

}