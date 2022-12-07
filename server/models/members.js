const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('members', {
    id_members: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    name_members: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    isadmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    password_members: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'members',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "members_pkey",
        unique: true,
        fields: [
          { name: "id_members" },
        ]
      },
    ]
  });
};
