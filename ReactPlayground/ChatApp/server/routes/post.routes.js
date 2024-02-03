const post = require("../controllers/post.controller");

module.exports = function(app) {
    app.post("/api/posts", post.createPost);
    app.get("/api/posts/timeline/:userId", post.getTimelinePosts);
    app.get("/api/posts/profile/:username", post.getUserPosts);
    app.get("/api/posts/:id", post.getPost);
    app.put("/api/posts/:id/like", post.likePost);
    app.put("/api/posts/:id", post.updatePost);
    app.delete("/api/posts/:id", post.deletePost);
}