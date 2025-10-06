const post = [{
    id: 1,
    title: 'Primer Post',
    content: 'Contenido del primer post',
    author: 'Matias',
    createdAt: new Date(),
    comments: [
        {
            id: 1,
            author: 'Matias',
            content: 'Comentario del primer post',
            createdAt: new Date(),
        }
    ]
},
{
    id: 2,
    title: 'Segundo Post',
    content: 'Contenido del segundo post',
    author: 'Matias',
    createdAt: new Date(),
    comments: [
        {
            id: 2,
            author: 'Matias',
            content: 'Comentario del segundo post',
            createdAt: new Date(),
        }
    ]
}]


module.exports = post;