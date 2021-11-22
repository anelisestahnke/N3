const { Schema, model } = require("mongoose");

salaSchema = new Schema({
  nome: String,
  lotacao: Number,
});

model("sala", salaSchema);
