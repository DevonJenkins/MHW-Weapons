// import { ArmorSet } from "../models/armor-set.js";
// import { Armor } from "../models/armor.js";

// function index(req, res){
//   ArmorSet.find({})
//   .then(armorSets => {
//     res.render('armor-sets/index',{
//       armorSets,
//       title: "Armor Sets"
//     })
//   })
//   .catch(err => {
//     console.log("ERROR")
//     res.redirect("/armor-sets")
//   })
// }

// function newArmorSet(req, res){
//   Armor.find({})
//   .then(armor => {
//   res.render('armor-sets/new', {
//     title: 'Build Armor Set',
//     armor
//   })
// })}



// export {
// index,
// newArmorSet as new,
// }