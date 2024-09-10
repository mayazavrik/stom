'use strict';
const { Doctor } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const doctorsData = [
      {
        title: "Саша",
        img: "https://sun9-36.userapi.com/impg/mSx7f8Y_oheTo9vItOukQqcp6c9l-tEzHYyE-Q/UM0P3-1avTg.jpg?size=1191x1196&quality=95&sign=89779145c6ca6255780e8a0c8962a49b&type=album",
        about: "Самый лучший стоматолог в Питере",
      },
      {
        title: "Саша",
        img: "https://sun9-36.userapi.com/impg/mSx7f8Y_oheTo9vItOukQqcp6c9l-tEzHYyE-Q/UM0P3-1avTg.jpg?size=1191x1196&quality=95&sign=89779145c6ca6255780e8a0c8962a49b&type=album",
        about: "Самый лучший стоматолог в Питере",
      },
      {
        title: "Иван Петров",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTf2tsAvwA7cU64DYMgdMrbjyK_nnw9lDD6A&s",
        about: "Иван Петров — эксперт в области ортодонтии с опытом работы более 10 лет. Он специализируется на исправлении прикуса и выравнивании зубов у пациентов всех возрастов.",
      },
      {
        title: "Мария Кузнецова",
        img: "https://msch-severstal.ru/upload/main/027/muzgina_2_1.jpg",
        about: "Мария Кузнецова является специалистом в области имплантологии и реконструктивной стоматологии. Обладает глубокими знаниями в области установки зубных имплантатов и восстановления зубного ряда.",
      },
      {
        title: "Алексей Иванов",
        img: "https://belayaraduga.ru/wp-content/uploads/2018/07/br_docs-all_02-1.jpg",
        about: "Алексей Иванов — ведущий специалист по терапевтической стоматологии. Он имеет опыт в лечении сложных случаев кариеса и заболеваний десен, а также применяет современные методики лечения.",
      },
      
    ];
    await Doctor.bulkCreate(doctorsData);
  },

  async down (queryInterface, Sequelize) {
    await Doctor.destroy({ truncate: { cascade: true } });
  }
};
