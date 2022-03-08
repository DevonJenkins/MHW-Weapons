import mongoose from "mongoose"

const Schema = mongoose.Schema

const armorSetSchema = new Schema({
  name: String,
  type: String,
  stats: Number,
  //combine armor piece stats to figure out armor set stats. 
})


const ArmorSet = mongoose.model('ArmorSet', armorSetSchema)

export{
  ArmorSet
}

