exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.success = req.flash('success')
    res.locals.user = req.session.user
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

exports.loginRequired = (req, res, next)=>{
    if(!req.session.user){
        req.flash('errors', 'Você precisa fazer login')
        req.session.save(()=> res.redirect('/'))
        return  
    }
    next()
}