module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define("Card", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      // low, medium, high, blocking
      validate: { min: 0, max: 3 }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      // to do, doing, done
      validate: { min: 0, max: 2 }
    },
  }, {
    classMethods: {
      associate: function(models) {
        Card.belongsTo(models.User, {
          as: 'Creator',
          foreignKey: {
            name: 'created_by',
            allowNull: false
          }
        });
        Card.belongsTo(models.User, {
          as: 'Assignee',
          foreignKey: {
            name: 'assigned_to',
            allowNull: false
          }
        });
      }
    }
  });

  return Card;
};