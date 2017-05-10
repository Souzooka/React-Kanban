module.exports = function(sequelize, DataTypes) {
  var Picture = sequelize.define("Picture", {
    title: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    created_by: DataTypes.STRING,
    assigned_to: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User);
      }
    }
  });

  return Task;
};