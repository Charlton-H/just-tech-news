const Post = require("./Post");
const User = require("./User");
const Vote = require("./Vote");

// create associations

// reference User model (table) by id to Post model user_id as fk
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

// define a Many-to-Many juntion
User.belongsToMany(Post, {
  through: Vote,
  as: "voted_post",
  foreignKey: "user_id",
});

Post.belongsToMany(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "post_id",
});

// fk constraint -- create one-to-many associations directly between these models,
// can perform aggreegated SQL functions between models
Vote.hasMany(User, {
  foreignKey: "user_id",
});

Vote.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

Post.belongsTo(Vote, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Vote };
