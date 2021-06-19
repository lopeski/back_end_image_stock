const express = require('express');
const Image = require('../models/image');

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    title,
    body,
  } = req.body;

  try {
    const finalImage = await Image.create({
      title,
      body,
    });
    return res.status(200).send({ mensage: 'item criados', finalImage });
  } catch (e) {
    return res.status(500).send({ error: e });
  }
});

router.put('/', async (req, res) => {
  const {
    id,
    title,
    body,
  } = req.body;
  try {
    const Prod = await Image.findByPk(id);
    if (Prod) {
      Prod.Title = title;
      Prod.Body = body;
      await Prod.save();
      return res.status(200).send(Prod);
     } else {
      return res.status(404).send({ erro: 'erro' });
    }
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.get('/', async (req, res) => {
  const { id } = req.params;
  Image.findByPk(id)
    .then((item) => res.status(200).send(item))
    .catch((err) => res.status(404).send(err));
});

router.delete('/', async (req, res) => {
  const { id } = req.body;
  try {
    const item = await Image.findByPk(id);
    await item.destroy();
    return res.status(200).send({ mensage: 'item delete' });
  } catch (e) {
    return res.status(400).send(e);
  }
});
module.exports = (app) => app.use('/item', router);
