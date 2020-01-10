module.exports = function(sequelize, DataTypes) {
    const Comment = sequelize.define("Comment", {      
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
        }
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0      
      }
    });
    Comment.associate = function(models) {    
        Comment.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
            }
        });
        Comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        })
      };
      return Comment;  
};
      