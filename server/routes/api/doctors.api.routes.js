const router = require('express').Router();
const { Doctor } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const doctors = await Doctor.findAll({ raw: true });
    res.json(doctors);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.get('/:doctorId', async (req, res) => {
  try {
    const doctor = await Doctor.findOne({
      raw: true,
      where: { id: req.params.doctorId },
    });
    res.json(doctor);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, img, about} = req.body;
    const doctor = await Doctor.create({
      title:title,
      img:img,
      about: about,
     
    });
    res.status(201).json(doctor); // Изменим статус на 201 для создания ресурса
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete('/:doctorId', async (req, res) => {
  try {
    const { doctorId } = req.params;
    const result = await Doctor.destroy({ where: { id: +doctorId } });
    console.log('========');
    if (result > 0) {
      res.json(+doctorId);
      return;
    }
    res.json({ message: 'error' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:doctorId', async (req, res) => {
  try {
    const { doctorId } = req.params;
    const { title, img, about } = req.body;
    const [result] = await Doctor.update(
      {
        title:title,
        img:img,
        about: about,
      
      },
      { where: { id: doctorId } }
    );
    if (result > 0) {
      const doctor = await Doctor.findOne({ where: { id: +doctorId } });
      res.json(doctor);
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
