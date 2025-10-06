const express = require('express');
const posts = require('../data.js');

const router = express.Router();

// GET /api/posts -> obtener todos los posts con sus comentarios
router.get('/', (req, res) => {
    res.json(posts);
});

// POST /api/posts -> crear un nuevo post
router.post('/', (req, res) => {
    const { title, content, author } = req.body; // es lo mismo que hacer req.body.title, etc
    const post = {
        id: posts.length + 1,
        title,
        content,
        author,
        createdAt: new Date(),
        comments: []
    };

    posts.push(post);
    res.status(201).json(post); // Muestra el post creado
});

// POST /api/posts/:id/comments -> agregar un comentario a un post
router.post('/:id/comments', (req, res) => {
    const postId = parseInt(req.params.id);
    const { author, content } = req.body;
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({error: 'Post no encontrado'});
    }

    const comment = {
        id: post.comments.length + 1,
        author,
        content,
        createdAt: new Date()
    };

    post.comments.push(comment);
    res.status(201).json(comment); // Muestra el comentario creado
});

module.exports = router;