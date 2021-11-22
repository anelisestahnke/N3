const { model } = require("mongoose");

const Pessoa = model("pessoa");

module.exports = (app) => {
  app.get("/pessoa/:nome", async (req, res) => {
    const pessoa = await Pessoa.findOne({ nome: req.params.nome });
    res.send(pessoa);
  });

  app.get("/pessoa", async (req, res) => {
    const pessoa = await Pessoa.find({});
    res.send(pessoa);
  });

  app.post("/pessoa", async (req, res) => {
    try {
      if (!req.body?.nome) throw new Error("Campo nome não informado");
      if (!req.body?.sobrenome)
        throw new Error("Campo sobrenome não informado");
      const pessoa = new Pessoa(req.body);
      await pessoa.save();

      res.send(this.props);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.delete("/salaevent/:id", async (req, res) => {
    try {
      await Pessoa.deleteOne({ _id: req.params.id });
      res.send(this.props);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
