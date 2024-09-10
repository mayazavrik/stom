const router = require('express').Router();
const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email.trim() && password.trim()) {
      const user = await User.findOne({ where: { email } });
      if (user && user.password === password) {
        res.json({ message: 'success', user });
      } else {
        res.json({ message: 'Неверный логин или пароль' });
      }
    } else {
      res.json({ message: 'Заполните все поля' });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
