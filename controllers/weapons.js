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



export {
  index
}