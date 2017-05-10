module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Task", {
    title: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User, {
          as: 'Creator',
          foreignKey: {
            name: 'created_by',
            allowNull: false
          }
        });
        Task.belongsTo(models.User, {
          as: 'Assignee',
          foreignKey: {
            name: 'assigned_to',
            allowNull: false
          }
        });
      }
    }
  });

  return Task;
};