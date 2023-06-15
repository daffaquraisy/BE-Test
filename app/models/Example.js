module.exports = (sequelize, Sequelize) => {
  const Example = sequelize.define(
    "examples",
    {
      field: {
        type: Sequelize.STRING(50),
      },
    },
    { timestamps: false }
  );
  return Example;
};
