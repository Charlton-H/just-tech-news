const Post = require("./Post");
const User = require("./User");

// create associations

// reference User model (table) by id to Post model user_id as fk
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
