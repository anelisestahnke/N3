const { Schema, model } = require("mongoose");

pessoaSchema = new Schema({
  nome: String,
  sobrenome: String,
});

model("pessoa", pessoaSchema);
