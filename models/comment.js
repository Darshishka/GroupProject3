module.exports = function(sequelize, DataTypes) {
    const Comment = sequelize.define("Comment", {      
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
        }
      }
    });
    Comment.associate = function(models) {    
        Comment.belongsTo(models.User, {
          foreignKey: "email"
        });
        Comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        })
      };
      return Comment;  
};
      