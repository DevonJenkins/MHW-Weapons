import mongoose from "mongoose";

const Schema = mongoose.Schema

const armorSchema = new Schema({
  name: {type: String, required: true, unique: true},
  armorType: String,
  defense: Number,
  skill: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Armor = mongoose.model('Armor', armorSchema)

export{
  Armor
}