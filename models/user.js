module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("User", {
    
      name: DataTypes.STRING
    });
  
    User.associate = function(models) {
      // Associating User with Posts
      // When an User is deleted, also delete any associated Posts
      User.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return User;
  };