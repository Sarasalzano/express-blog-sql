function notFound (req, res, next){
    //se non viene trovata rotta, verrà resituito messaggio not found
    res.status(404)
    res.json({
        error:"Not Found",
        message:"Post non trovato"
    })
}
module.exports = notFound;