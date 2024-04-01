exports.middlewareGlobal = (req, res, next) => {
    if(req.body.client){
        console.log()
        console.log(`Vi que voce postou ${req.body.client}`)
        console.log()
    }
    next()
}