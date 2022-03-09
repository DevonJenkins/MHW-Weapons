import mongoose from "mongoose"

const Schema = mongoose.Schema

const armorSetSchema = new Schema({
  name: String,
  stats: Number,
  //add armor pieces to schema:head body waist arms legs
  //combine armor piece stats to figure out armor set stats. 
})


const ArmorSet = mongoose.model('ArmorSet', armorSetSchema)

export{
  ArmorSet
}

