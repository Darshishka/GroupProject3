module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.TEXT,
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
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0      
    },
    image: {
      type: DataTypes.BLOB,
      length: "long"
    }
  });
  Post.associate = function(models) {    
      Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
          }
      });
      Post.hasMany(models.Comment, {
        onDelete: "cascade",
        hooks: true
      });
    };
    return Post;  
};
    
    

