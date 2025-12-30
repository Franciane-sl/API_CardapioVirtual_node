const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./Category');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  imagemurl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id'
    }
  }
}, {
  tableName: 'products',
  timestamps: true
});

module.exports = Product;
