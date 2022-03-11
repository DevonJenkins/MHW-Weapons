import mongoose from "mongoose";

const Schema = mongoose.Schema 

const weaponSchema = new Schema({
  name: String,
  weaponType: String,
  sharpness: String,
  affinity: Number,
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
  armors: [{type: Schema.Types.ObjectId, ref:'Armor'}],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
  //I might have to do some "research" to figure out what some of these mean. I may end up switching up the datatatype to make the app more cohesive with the actual game. 
})

const Weapon = mongoose.model("Weapon", weaponSchema)

export {
  Weapon
}