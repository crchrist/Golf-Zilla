'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favoritesList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  favoritesList.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    species: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'favoritesList',
  });
  return favoritesList;
};