import mongoose from "mongoose";

const Schema = mongoose.Schema 

const weaponSchema = new Schema({
  name: String,
  type: String,
  sharpness: Number,
  affinity: String,
  element: String,
  elderSeal: String,
  slots: Number,
  defenseBonuses: String, 
  notes: String, //could use a checkbox or dropdown for notes maybe? 
  phialType: String,
  shellingType: String,
  shellingLevel: Number,
  kinsectBonus: String,//should i include this field
  coatings: String,
  customMods: String, ///should I include this field? 

  //I might have to do some "research" to figure out what some of these mean. I may end up switching up the datatatype to make the app more cohesive with the actual game. 
})

const Weapon = mongoose.model("Weapon", weaponSchema)

export {
  Weapon
}