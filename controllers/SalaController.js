const { model } = require("mongoose");

const Sala = model("sala");

module.exports = (app) => {
  app.post("/sala", async (req, res) => {
    try {
      if (!req.body?.nome) throw new Error("Campo nome não informado");
      if (!req.body?.lotacao) throw new Error("Campo lotação não informado");
      const sala = new Sala(req.body);
      await sala.save();

      res.send(this.props);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.put("/sala/:id", async (req, res) => {
    try {
      const { nome, lotacao } = req.body;

      await Sala.updateOne(
        {
          _id: req.params.id,
        },
        { nome, lotacao },
      );

      res.send(this.props);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
