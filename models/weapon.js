import mongoose from "mongoose";

const Schema = mongoose.Schema 

const weaponSchema = new Schema({
  name: {type:String, required:true, unique:true},
  weaponType: String,
  attackPower: {type:Number, required:true},
  sharpness: String,
  affinity: {type:Number, min:0, max:100},
  element: String,
  elderseal: String,
  slots: {type:Number, min:0, max:3},
  defenseBonus: Number, 
  notes: String, 
  phialType: String,
  shellingType: String,
  shellingLevel: {type:Number, min:0, max:8},
  kinsectBonus: String,
  coating: String,
  customMods: String, 
  armors: [{type: Schema.Types.ObjectId, ref:'Armor'}],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
  //I might have to do some "research" to figure out what some of these mean. I may end up switching up the datatatype to make the app more cohesive with the actual game. 
})

const Weapon = mongoose.model("Weapon", weaponSchema)

export {
  Weapon
}