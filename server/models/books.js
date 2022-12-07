const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('books', {
    id_books: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code_book: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    stock: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'books',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "books_pkey",
        unique: true,
        fields: [
          { name: "id_books" },
        ]
      },
    ]
  });
};
