module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "Question",
    {
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
