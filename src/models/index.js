const Category = require('./Category');
const Product = require('./Product');
const User = require('./User');
const Adress = require ('./Adress')


Category.hasMany(Product, {
  foreignKey: 'category_id',
  as: 'products'
});


Product.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category'
});

User.hasOne(Adress,{
  foreignKey:'user_id',
  as: 'adress'
})

Adress.belongsTo(User,{
  foreignKey:'user_id',
  as: 'user'
})

module.exports = {
  Category,
  Product,
  User,
  Adress
};
