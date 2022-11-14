const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      picture: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "https://www.softzone.es/app/uploads/2018/04/guest.png",
      },

      sub: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      mail: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      authorized: {
        type: DataTypes.ENUM("all", "view", "not", "unsubscribed"),
        allowNull: false,
        defaultValue: "all",
      },

      verified: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "not_verified",
      },

      verificationCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },

      favoriteshouses: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
        defaultValue: [],
      },
    },

    {
      timestamps: false,
    }
  );
};
// {
//     id:
//     name:
//     lastname:
//     mail:
//     country:
//     favoritesHouses: []
//     ownerOf: []
//     }
