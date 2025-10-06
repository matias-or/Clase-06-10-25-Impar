const express = require('express');
const cors = require('cors');
const postsRouter = require('./Routes/posts.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas para posts
app.use('/api/posts', postsRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});