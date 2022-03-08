import { ArmorSet } from "../models/armor-set.js";

function index(req, res){
  ArmorSet.find({})
  .then(armorSets => {
    res.render('armor-sets/index',{
      armorSets,
      title: "Armor Sets"
    })
  })
  .catch(err => {
    console.log("ERROR")
    res.redirect("/armor-sets")
  })
}

function newArmorSet(req, res){
  res.render('armor-sets/new', {
    title: 'Add Armor'
  })
}

export {
index,
newArmorSet as new,
}