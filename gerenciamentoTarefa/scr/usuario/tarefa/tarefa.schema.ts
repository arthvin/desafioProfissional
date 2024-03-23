import { Schema, model } from 'mongoose'

const tarefaSchema = new Schema({
    ID: Number,
    título: String,
    descrição: String,
    dataDeCriação: String,
    dataDeConclusão: Date,
    tipo: String,
    categoria: String,
    status: String,
    usuárioAssociado: String },
     {
    timestamps: true
})

export enum status {
    pendente = "pendente",
    andamento = "em andamento",
    concluída = "concluída"
}


export default model('Usuario', tarefaSchema)

