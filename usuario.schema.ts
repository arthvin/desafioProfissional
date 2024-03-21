import { Schema, model } from 'mongoose'

const usuarioSchema = new Schema({
    ID: Number,
    name: String,
    peso: String,
    email: String
}, {
    timestamps: true
})

export default model('Usuario', usuarioSchema)

