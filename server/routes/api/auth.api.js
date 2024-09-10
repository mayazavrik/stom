const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");



router.post("/sign-in", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.json({ message: "Такого юзера не существует или пароль неверный" });
      return;
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      res.json({ message: "Такого юзера не существует или пароль неверный" });
      return;
    }
    if (!email.trim() || !password.trim()) {
      res.json({ message: "Заполните все поля" });
      return;
    }
    req.session.userId = user.id;

    res.json({ message: "succes", user });
  } catch ({ message }) {
    res.json({ message });
  }
});


router.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({ message: "Ошибка при удалении сессии" });
    }
    res.clearCookie("service_sid").json({ message: "success" });
  });
});

router.get("/check", async (req, res) => {
  try {
    if (req.session.userId) {
      const user = await User.findOne({ where: { id: req.session.userId } });
      res.json({ message: "success", user });
      return;
    }
    res.status(401).json({ message: "false" });
  } catch ({ message }) {
    res.json({ message });
  }
});

// router.get("/check/service", async (req, res) => {
//   try {
//     if (req.session.serviceId) {
//       const service = await Service.findOne({
//         where: { id: req.session.serviceId },
//       });
//       res.status(200).json({ message: "success", service });
//       return;
//     }
//     res.status(401).json({ message: "false" });
//   } catch ({ message }) {
//     res.status(500).json({ message });
//   }
// });

module.exports = router;
