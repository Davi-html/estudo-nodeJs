exports.middlewareGlobal = (req, res, next) => {
    res.locals.variavelLocal = 'Valor da variavel'
    next()
}