module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        id: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                len: [1]    
        }
       },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]

        }
      },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
        }
      },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
    }
  },
        firstName: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
}
},
        lastName: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }

    });

    Post.associate = function(models) {
        
        Post.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return Post;
};
    
    

