'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rickList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rickList.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    species: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rickList',
  });
  return rickList;
};