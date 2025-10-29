//import dell array dei post
const posts = require("../data/posts");

//riporto logica delle funzioni che si trovano nel router. In questo caso la funzione index
function index(req, res) {
    res.json(posts);
}

//funzione show
function show(req, res) {
    //recupero l'id e lo trasformo da stringa a numero 
    const id = parseInt(req.params.id);
    //cerco id post
    const post = posts.find(post => post.id === id);
    res.json(post);
}

//funzione store
function store(req, res) {
    //creiamo nuovo id 
    const newId = posts[posts.length -1].id + 1; 
    //creazione nuovo post
    const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    tags: req.body.tags
}
//aggiungo post all'array posts
posts.push(newPost);
//visualizza dati specifici
console.log(req.body);
res.status(201);
res.json(newPost);
}

//funzione update
function update(req, res) {
    //converto id dinamico in numero
    const id = parseInt(req.params.id)
    //cerco post tramite id
    const post = posts.find(post => post.id === id);
    if (!post) {
        res.status(404);
        return res.json({
            error :"Not Found",
            message:"Post non trovato"
        })
    }
   //aggiorniamo il post
   post.title = req.body.title;
   post.content = req.body.content;
   post.tags = req.body.tags

   console.log(posts);
    res.json(post)   
}

//funzione modify 
function modify(req, res) {
    res.send('Modifica parziale del post ' + req.params.id);
}

//funzione delete 
function destroy(req, res) {
    //recupero l'id e lo trasformo da stringa a numero 
    const id = parseInt(req.params.id);

    //cerco post tramite id
    const post = posts.find(post => post.id === id);

    //controllo
    if(!post) {
        res.status(404)
        return res.json ({
            status : 404,
            error : "Not Found",
            message : "Post Non Trovato"
        })
    }
    //rimuovo post
    posts.splice(posts.indexOf(post), 1);
    //setto stato corretto
    res.sendStatus(204);
    console.log(posts);
}

module.exports = {index, show, store, update, modify, destroy}; 