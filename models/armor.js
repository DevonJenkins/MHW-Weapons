import mongoose from "mongoose";

const Schema = mongoose.Schema

const armorSchema = new Schema({
  name: {type: String, required: true, unique: true},
  armorType: String,
  defense: Number,
  //combine armor piece stats to figure out armor set stats. 
})


const Armor = mongoose.model('Armor', armorSchema)

export{
  Armor
}