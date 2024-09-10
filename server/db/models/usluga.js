'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usluga extends Model {
    static associate() {
     
    }
  }
  Usluga.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
			text: {
				allowNull: true,
				type: DataTypes.TEXT,
			},
      price:{
        allowNull: false,
				type: DataTypes.INTEGER,
      },
    
    },
    {
      sequelize,
      modelName: 'Usluga',
    }
  );
  return Usluga;
};
