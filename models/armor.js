import mongoose from "mongoose";

const Schema = mongoose.Schema

const armorSchema = new Schema({
  name: {type: String, required: true, unique: true},
  armorType: String,
  defense: Number,

})


const Armor = mongoose.model('Armor', armorSchema)

export{
  Armor
}