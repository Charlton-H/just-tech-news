const Post = require("./Post");
const User = require("./User");
const Vote = require("./Vote");
const Comment = require("./Comment");

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
  as: "voted_posts",
  foreignKey: "user_id",
});

Post.belongsToMany(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "post_id",
});

// fk constraint -- create one-to-many associations directly between these models,
// can perform aggreegated SQL functions between models
Vote.belongsTo(User, {
  foreignKey: "user_id",
});

Vote.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
});

Post.hasMany(Vote, {
  foreignKey: "post_id",
});

// Note that we don't have to specify Comment as a through table like we did for Vote.
// This is because we don't need to access Post through Comment;
// we just want to see the user's comment and which post it was for.

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Vote, Comment };
