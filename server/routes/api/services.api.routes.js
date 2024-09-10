const router = require('express').Router();
const { Usluga } = require('../../db/models');
router.get('/', async (req, res) => {
  try {
    const uslugas = await Usluga.findAll();
    res.json(uslugas);
  } catch ({ message }) {
    res.json({ message });
  }
});
router.post('/', async (req, res) => {
  try {
    const { title, text, price } = req.body;
    const service = await Usluga.create({
      title:title,
      text: text,
      price:price,
     
    });
    res.status(200).json(service);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});
router.delete('/:serviceId', async (req, res) => {
  try {
    const { serviceId } = req.params;
    const result = await Usluga.destroy({ where: { id: +serviceId } });
    console.log('========');
    if (result > 0) {
      res.json(+serviceId);
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});
router.put('/:serviceId', async (req, res) => {
  try {
    const { serviceId } = req.params;
    const { title,  text,price} = req.body;
    const [result] = await Usluga.update(
      {
        title,
        text,
        price,
      },
      { where: { id: serviceId } }
    );
    if (result > 0) {
      const service = await Usluga.findOne({ where: { id: +serviceId } });
      res.json(service);
    }
  } catch ({ message }) {
    res.json({ message });
  }
});


module.exports = router;