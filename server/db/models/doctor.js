'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Doctor.init({
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    img: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    about: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
  
  }, {
    sequelize,
    modelName: 'Doctor',
  });
  return Doctor;
};