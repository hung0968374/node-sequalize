const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "Question",
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      question: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      answer1: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      answer2: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      answer3: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      answer4: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      correctAnswer: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
    },
    {
      timestamps: false,

      createdAt: false,

      updatedAt: false,
    }
  );

  return Question;
};
