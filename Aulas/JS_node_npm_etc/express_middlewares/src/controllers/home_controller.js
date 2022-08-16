exports.paginaInicial =  (req, res,next) => {
    console.log('Respondendo ao cliente.')
    res.render('index');
    console.log(`'PaginaInicial' Olha o que tem na req.session.nome ${req.session.nome}`)
    next()
};

exports.tratarPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.')
}