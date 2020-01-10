module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {    
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
    },    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate : {
          len: [6]
      }
    },
    crossStreet: {
      type: DataTypes.STRING,      
    },
    referral: {
      type: DataTypes.STRING
    }
  });
  
  User.associate = function(models) {  
      User.hasMany(models.Post, {
        onDelete: "cascade",
        hooks: true
      });
      User.hasMany(models.Comment, {
        onDelete: "cascade",
        hooks: true
      });
    };
  
    return User;
  };