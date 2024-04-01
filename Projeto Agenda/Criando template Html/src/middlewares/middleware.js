exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Valor da variavel'
    next()
}

exports.checkCsfrError = (error, req, res, nex) => {
    if(error){
        return res.render('404')
    }

    next()
}

exports.CsrfMiddleware = (req, res, next)=>{
    res.locals.csrfToken = req.csrfToken()
    next()
}